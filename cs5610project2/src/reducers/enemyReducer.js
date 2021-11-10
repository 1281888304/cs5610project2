

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function createEnemyBoard(){
    const defaultState=[
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0'],
    ];
    for(let i=0;i<5;i++){
        const row=randomIntFromInterval(0,9);
        const col=randomIntFromInterval(0,9);
        if(defaultState[row][col]==='0'){
            defaultState[row][col]='bad';
        }else{
            i--;
        }
    }
    
    return defaultState;
  }

  export default function enemyReducer(state,action){
    if(state===undefined){
        return createEnemyBoard()
    }
    if (action.type === 'boardClick'){
        //random make one change state
        const row=randomIntFromInterval(0,9);
        const col=randomIntFromInterval(0,9);
        const value = state[row][col];
        if (value === '0') {
            state[row][col] = 'el';
        } else if(value==='bad'){
            state[row][col] = 'hit';
        }
        return [...state];
    }
    

    
  }