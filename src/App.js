import React, { Component } from 'react';
import './assets/css/gameTennis.css';
import FirstPlayer from './components/firstPlayer/firstPlayer';
import SecondPlayer from './components/secondPlayer/secondPlayer';
import ScoreBoard from './components/scoreBoard/scoreBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tennisBg">
          <h2 className="THeading">Let's Play Tennis</h2>
          <div>
            <ScoreBoard />
          </div>
          <div className="playerBox">
            <FirstPlayer />
            <SecondPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

