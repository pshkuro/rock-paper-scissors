import React from 'react';
import Results from '../results/Results';
import Board from '../board/Board';
import Rules from '../rules/Rules';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Results />
        <Board />
        <Rules />
      </div>
    );
  }
}