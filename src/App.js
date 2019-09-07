import React, { Component } from 'react';
import './assets/css/gameTennis.css';
import FirstPlayer from './components/firstPlayer/firstPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tennisBg">
          <h2 className="THeading">Let's Play Tennis</h2>
          <div className="playerBox">
            <FirstPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

