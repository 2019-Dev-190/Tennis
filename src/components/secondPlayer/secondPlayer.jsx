import React, { Component } from "react";

export default class SecondPlayer extends Component {
  updateScore = () => {
    let player = 2;
    this.props.updateScore(player);
  };
  render() {
    return (
      <div>
        <div className="playerHeading">Player2</div>
        <div className="player2" onClick={this.updateScore}></div>
      </div>
    );
  }
}
