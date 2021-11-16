import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
export default function WelcomePage() {

    return (<div class="WelcomePage">
        <h1>
        Welcome to Battleship!
        </h1>
        <h3><Link to={"/gameBoard/normal"}>Play normal Game</Link></h3>
        <h3><Link to={"/gameBoard/free"}>Play free play Game</Link></h3>
        <h3><Link to={"/rule"}>Rules</Link></h3>
    </div>)

}