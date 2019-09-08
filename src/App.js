import React, { Component } from 'react';
import './assets/css/gameTennis.css';
import FirstPlayer from './components/firstPlayer/firstPlayer';
import SecondPlayer from './components/secondPlayer/secondPlayer';
import ScoreBoard from './components/scoreBoard/scoreBoard';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: 0,
      secondPlayer: 0,
      gameBall: false,
      firstPlayerAdvantage: false,
      secondPlayerAdvantage: false,
      won: 0,
      deuce: false,
      points: [0, 15, 30, 40, 'won']
    };
  }


  updateScorePlayer = (player) => {
    const { deuce, gameBall, firstPlayerAdvantage, secondPlayerAdvantage, firstPlayer, secondPlayer, points } = this.state;

    if(player === 1 && !this.state.won)
    {
      const firstPlayer = this.state.firstPlayer + 1;

      if(gameBall && !secondPlayerAdvantage)
      {
        this.setState({won: 1});
      }
      if (deuce) {
        if (firstPlayerAdvantage) {
          this.setState({ gameBall: true });
        } else {
          this.setState({
            secondPlayerAdvantage: false,
            firstPlayerAdvantage: true,
          });
        }
      } else {

        if (points[firstPlayer] === 'won') {
          this.setState({ won: 1 });
        } else if (points[firstPlayer] === 40 && points[secondPlayer] === 40) {
          this.setState({
            deuce: true,
            firstPlayerAdvantage: true,
            firstPlayer
          });
        } else {
          this.setState({ firstPlayer });
        }
      }
  }
  }



  render() {
    const { firstPlayer, secondPlayer, won, points } = this.state;

    return (
      <div className="App">
        <div className="tennisBg">
          <h2 className="THeading">Let's Play Tennis</h2>
          <div>
            <ScoreBoard firstPlayer={points[firstPlayer]} secondPlayer={points[secondPlayer]} />
          </div>
          <div className="playerBox">
            <FirstPlayer updateScore={this.updateScorePlayer} />
            <SecondPlayer updateScore={this.updateScorePlayer} />
          </div>
          {
            won &&
            <h1>Player {won} Won!</h1>
          }
        </div>
      </div>
    );
  }
}
