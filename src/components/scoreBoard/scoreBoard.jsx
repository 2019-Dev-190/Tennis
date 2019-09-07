import React from "react";
import PropTypes from "prop-types";

const Score = ({ firstPlayer = 0, secondPlayer = 0 }) => (
  <div className="scoreBoard">
    <h3>scoreBoard</h3>
    <div className="playerStyles">
      Player1: <div className="scoreStyles">{firstPlayer}</div>
    </div>
    <div className="playerStyles">
      Player2: <div className="scoreStyles">{secondPlayer}</div>
    </div>
  </div>
);

Score.propTypes = {
  firstPlayer: PropTypes.number,
  secondPlayer: PropTypes.number
};

export default Score;
