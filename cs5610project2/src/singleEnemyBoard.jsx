import { useDispatch } from "react-redux";
import './SingleBoard.css'

export function SingleEnemyBoard(props){
    const symbol=props.symbol;

    let blockStyle='blue';
    if(symbol==='bad' || symbol==='0'){
        blockStyle='blue';
    }
    else if(symbol==='el'){ //enemy miss the ship,user lucky
        blockStyle='el';
    }
    else if(symbol==='hit'){
        blockStyle='cross';
    }

    const dispatch=useDispatch();
    return (<div id="singleBoard" class={blockStyle}>
        {symbol}
    </div>);

}
