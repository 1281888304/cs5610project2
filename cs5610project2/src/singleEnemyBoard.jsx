import { useDispatch } from "react-redux";
import './SingleBoard.css'

export function SingleEnemyBoard(props){
    const symbol=props.symbol;

    let blockStyle='blue';
    if(symbol==='0' || symbol === 'bad'){
        blockStyle='blue';
    }

    else if(symbol==='el'){ //enemy miss the ship,user lucky
        blockStyle='mark';
    }
    else if(symbol==='hit'){
        blockStyle='cross';
    }

    const dispatch=useDispatch();
    if (symbol === 'bad') {
        return (<div id="singleBoard" class={blockStyle}>
            {}
            <div id={"dot"} class ={"dot"}>

            </div>
        </div>)
    }

    if (symbol === 'hit') {
        return (<div id="singleBoard" class={blockStyle}>
            {"X"}
        </div>)
    }

    if (symbol === 'el') {
        return (<div id="singleBoard" class={blockStyle}>
            {"X"}
        </div>)
    }

    return (<div id="singleBoard" class={blockStyle}>
        {}
    </div>);

}
