import React, { Component } from 'react';

export default class FirstPlayer extends Component {
    updateScore = () => {
        let player = 1;
        this.props.updateScore(player);
    }
    render() {
        return (
            <div>
                <div className="playerHeading">Player1</div> 
                <div className="player1" onClick={this.updateScore}></div>               
            </div>
        );
    }
}
