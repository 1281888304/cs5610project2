
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
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
function generateGameBoard(){
    const defaultState=[
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ];
    
    // for(let i=0;i<5;i++){
    //     const row=randomIntFromInterval(0,9);
    //     const col=randomIntFromInterval(0,9);
    //     if(defaultState[row][col]===''){
    //         defaultState[row][col]='bad';
    //     }else{
    //         i--;
    //     }
    // }
    initShips(defaultState, 5);
    initShips(defaultState, 4);
    initShips(defaultState, 3);
    initShips(defaultState, 3);
    initShips(defaultState, 2);
    
    return defaultState;
}

export default function gameReducer(state,action){
    if(state===undefined){
        return generateGameBoard()
    }
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === '') {
            state[action.x][action.y] = 'ul';
        } else if(value==='bad'){
            state[action.x][action.y] = 'hit';
        }
        // check winning condition

        return [...state];
    }
    return state;
}