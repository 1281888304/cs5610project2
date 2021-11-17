import { useSelector } from "react-redux";
import { SingleBoard } from "./SingleBoard";
import { useParams } from 'react-router';
import './board.css'
import { SingleEnemyBoard } from "./singleEnemyBoard";
import ResetButton from './ResetButton';
import 'bootstrap/dist/css/bootstrap.css'

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function checkValidCol(matrix, row, col, max) {
    if (col + max >= 10) {
        return false;
    }

    for (let i = col; i < col + max; i++) {
        console.log("checkValidCol: " + matrix[row][i]);
        if (matrix[row][i] === 'bad') {
            return false;
        }
    }

    return true;
}

function checkValidRow(matrix, row, col, max) {
    if (row + max >= 10) {
        return false;
    }

    for (let i = row; i < row + max; i++) {
        console.log("checkValidRow: " + matrix[i][col]);
        if (matrix[i][col] !== '0' && matrix[i][col] !== '') {
            return false;
        }
    }

    return true;
}

function initShips(boardState, shipLength) {
    let row=randomIntFromInterval(0,9);
    let col=randomIntFromInterval(0,9);

    let rotation = randomIntFromInterval(0,1);
    if (rotation === 1) {
        while (!checkValidCol(boardState, row, col, shipLength)) {
            console.log("check row: " + row + " col: " + col);
            row=randomIntFromInterval(0,9);
            col=randomIntFromInterval(0,9);
        }

        for (let i = col; i < col + shipLength; i++) {
            console.log("Row: " + row + ", col: " + i);
            boardState[row][i] = 'bad';
        }
    } else {
        while (!checkValidRow(boardState, row, col, shipLength)) {
            console.log("check row: " + row + " col: " + col);
            row=randomIntFromInterval(0,9);
            col=randomIntFromInterval(0,9);
        }

        for (let i = row; i < row + shipLength; i++) {
            console.log("Row: " + i + ", col: " + col);
           boardState[i][col] = 'bad';
        }
    }
}


export default function BattleShipBoard(){
    const boardState=useSelector((state)=> state.game) //user board state
    const boardComponent=[];//uer board

    const enemyBoardState=useSelector((state)=>state.enemyGame)
    const enemyBoardComponent=[];//user board
    const gameType = useParams().gameType;
    if(gameType==="normal"){
        // initShips(boardState, 5);
        // initShips(boardState, 4);
        // initShips(boardState, 3);
        // initShips(boardState, 3);
        // initShips(boardState, 2);
        for(let i=0;i<boardState.length;i++){
            let row=boardState[i];
            for(let j=0;j<row.length;j++){
                boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} />))
            }
        }
        // initShips(enemyBoardState, 5);
        // initShips(enemyBoardState, 4);
        // initShips(enemyBoardState, 3);
        // initShips(enemyBoardState, 3);
        // initShips(enemyBoardState, 2);
        for(let i=0;i<enemyBoardState.length;i++){
            let row=enemyBoardState[i];
            for(let j=0;j<row.length;j++){
                enemyBoardComponent.push((<SingleEnemyBoard symbol={enemyBoardState[i][j]} x={i} y={j} />))
            }
        }
        return <div>
            <div class="flexbox-container">
            <div class="flexbox-container2">
                <h2>BattleShip game</h2>
                
                <h2>User term</h2>
                <div id="battleShipBlock" >{boardComponent}</div>
            </div>
            <div className="flexbox-container3">
                <h2>Enemy terms</h2>
                <div id="enemy">{enemyBoardComponent}</div>

            </div>
        
        </div>
        <div id="button"><ResetButton text="Reset, pls"/></div>
        </div>
    }else if (gameType==="free"){
        for(let i=0;i<boardState.length;i++){
            let row=boardState[i];
            for(let j=0;j<row.length;j++){
                boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} />))
            }
        }
        return <div>
            <h2>User term</h2>
            <div id="battleShipBlock">{boardComponent}</div>
            <div id="button"><ResetButton text="Reset, pls"/></div>
        </div>
    }   
}