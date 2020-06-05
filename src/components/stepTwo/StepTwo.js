import React from 'react';
import '../stepTwo/stepTwo.scss';
import Figure from '../figure/Figure';
import RivalFigure from '../stepTwo/rivalFigure/RivalFigure';
import {FIGURES} from '../../const';
import {getRandomArrayItem} from '../../utils.js/common';

const WINNER = {
  user: 'user',
  rival: 'rival',
  draw: 'draw',
}

export default class StepTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRivalFigure: false,
      rivalFigureValue: null,
      winner: null,
    }

    this.baseState = this.state;
  }

  render() {
    if (!this.props.value) return null;

    const winnerClass = 'game__figure__winner';
    const isUserWinner = this.state.winner === WINNER.user ? winnerClass : null;
    const isRivalWinner = this.state.winner === WINNER.rival ? winnerClass : null;

    return(
      <div className="game__board__step-two">
        <div className="step-two__figure step-two__figure__user">
          <p className="font-body_m color-white step-two__member-name">YOU PICKED</p>
          <Figure
           value={this.props.value}
           winnerClass={isUserWinner}/>
        </div>
        {this.state.isRivalFigure ? 
          <div className="step-two__winner-status">
            <h2 className="font-head_l color-white">
              {this.state.winner === WINNER.draw ? 'DRAW' :  this.state.winner === WINNER.user ? `YOU WIN` : `YOU LOSE`}
            </h2>
            <button
             className="button button_theme_white"
             onClick={() => {
              this.props.setValue(null);
              this._resetComponent();
             }}
             >PLAY AGAIN</button>
          </div> : null}
        <RivalFigure
         value={this.state.rivalFigureValue}
         winnerClass={isRivalWinner}
         showRivalFigure={() => this.showRivalFigure()}/>
      </div>
    );
  }

  showRivalFigure() {
    const rivalFigureValue = getRandomArrayItem(FIGURES);
    this.setState(state => ({
      ...state,
      isRivalFigure: !this.isRivalFigure,
      rivalFigureValue: rivalFigureValue,
    }));

    this.calculateWinner();
  }

  calculateWinner() {
    const userFigure = this.props.value;
    const rivalFigure = this.state.rivalFigureValue;

    const rules = {
      paper: 'rock',
      scissors: 'paper',
      rock: 'scissors',
    };

    const isUserWinner = rules[userFigure] === rivalFigure;
    const isDraw = userFigure === rivalFigure;
    const winner = isDraw ? WINNER.draw : isUserWinner ? WINNER.user : WINNER.rival;

    // Rerender stepTwo board with new state
    this.setState(state => ({
      ...state,
      winner: winner,
    })); 

    // Notify Game to change Result
    if (this.state.winner === WINNER.user) return this.props.checkWinner();
  }

  // Reset previous state when change steps (on Play Again button)
  _resetComponent() {
    this.setState(this.baseState);
  }
 
}