import { useDispatch } from "react-redux";
import './SingleBoard.css'

export function SingleBoard(props){
    const symbol=props.symbol;

    let blockStyle='blue';
    if(symbol==='' || symbol==='bad'){
        blockStyle='blue';
    }
    else if(symbol==='miss'){
        blockStyle='mark';
    }
    else if(symbol==='hit'){
        blockStyle='cross';
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