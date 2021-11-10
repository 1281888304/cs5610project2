import { useSelector } from "react-redux";
import { SingleBoard } from "./SingleBoard";
import { useParams } from 'react-router';
import './board.css'
import { SingleEnemyBoard } from "./singleEnemyBoard";

export default function BattleShipBoard(){
    const boardState=useSelector((state)=> state.game) //user board state
    const boardComponent=[];//uer board

    const enemyBoardState=useSelector((state)=>state.enemyGame)
    const enemyBoardComponent=[];//user board
    const gameType = useParams().gameType;
    if(gameType==="normal"){
        for(let i=0;i<boardState.length;i++){
            let row=boardState[i];
            for(let j=0;j<row.length;j++){
                boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} />))
            }
        }
        for(let i=0;i<enemyBoardState.length;i++){
            let row=enemyBoardState[i];
            for(let j=0;j<row.length;j++){
                enemyBoardComponent.push((<SingleEnemyBoard symbol={enemyBoardState[i][j]} x={i} y={j} />))
            }
        }
        return <div>
            <h2>User term</h2>
            <div id="battleShipBlock">{boardComponent}</div>
            <h2>Enemy terms</h2>
            <div id="enemy">{enemyBoardComponent}</div>
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
            
        </div>
    }   
}