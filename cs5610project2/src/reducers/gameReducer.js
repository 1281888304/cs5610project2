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

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function generateGameBoard(){
    
    //defaultState[9][9]='miss';
    for(let i=0;i<5;i++){
        const row=randomIntFromInterval(1,3);
        const col=randomIntFromInterval(1,3);
        if(defaultState[row][col]===''){
            defaultState[row][col]='bad';
        }
    }
    return defaultState;
}

export default function gameReducer(state,action){
    if(state===undefined){
        return generateGameBoard()
    }
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === '') {
            state[action.x][action.y] = 'miss';
        } else if(value==='bad'){
            state[action.x][action.y] = 'hit';
        }
        // check winning condition

        return [...state];
    }
    return state;
}