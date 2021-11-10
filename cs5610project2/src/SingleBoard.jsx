import { useDispatch } from "react-redux";
import './SingleBoard.css'

export function SingleBoard(props){
    const symbol=props.symbol;

    let blockStyle='blue';
    if(symbol==='' || symbol==='bad' || symbol==='0'){
        blockStyle='blue';
    }
    else if(symbol==='ul'){ //user miss the ship,user lucky
        blockStyle='mark';
    }
    else if(symbol==='hit'){
        blockStyle='cross';
    }else if (symbol==='enemyLucky'){ //enemy miss the ship,emey lucky
        blockStyle='lucky';
    }

    const dispatch=useDispatch();
    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="singleBoard" class={blockStyle}>
        {symbol}
    </div>);

}