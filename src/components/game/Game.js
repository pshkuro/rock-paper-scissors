import React from 'react';
import Results from '../results/Results';
import Board from '../board/Board';
import Rules from '../rules/Rules';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      userResult: 0,
    }
  }

  render() {
    return (
      <div className="game">
        <Results value={this.state.userResult}/>
        <Board checkWinner={() => this.setUserResult()}/>
        <Rules />
      </div>
    );
  }

  setUserResult() {
    this.setState({
      userResult: this.state.userResult + 1,
    })
  }
}