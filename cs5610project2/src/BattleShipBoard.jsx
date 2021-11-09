import { useSelector } from "react-redux";
import { SingleBoard } from "./SingleBoard";
import './board.css'

export default function BattleShipBoard(){
    const boardState=useSelector((state)=> state.game)
    const boardComponent=[];
    for(let i=0;i<boardState.length;i++){
        let row=boardState[i];
        for(let j=0;j<row.length;j++){
            boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} />))
        }
    }
    

    return <div id="battleShipBlock">{boardComponent}</div>
    
}