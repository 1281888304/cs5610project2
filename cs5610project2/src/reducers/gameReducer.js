
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
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
    
    for(let i=0;i<5;i++){
        const row=randomIntFromInterval(0,9);
        const col=randomIntFromInterval(0,9);
        if(defaultState[row][col]===''){
            defaultState[row][col]='bad';
        }else{
            i--;
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
            state[action.x][action.y] = 'ul';
        } else if(value==='bad'){
            state[action.x][action.y] = 'hit';
        }
        // check winning condition

        return [...state];
    }
    return state;
}