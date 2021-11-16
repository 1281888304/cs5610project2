import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import BattleShipBoard from './BattleShipBoard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const store=createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    {/*<h2>BattleShip game</h2>*/}
    <Router>
      <Routes>
      <Route path="/gameBoard/:gameType" element={<BattleShipBoard />} />
      
      </Routes>
    </Router>
    </Provider>,
  document.getElementById('root')
);


