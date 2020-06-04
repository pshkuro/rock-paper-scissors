import React from 'react';
import '../stepTwo/stepTwo.scss';
import Figure from '../figure/Figure';
import RivalFigure from '../stepTwo/rivalFigure/RivalFigure';
import {FIGURES} from '../../const';
import {getRandomArrayItem} from '../../utils.js/common';

export default class StepTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRivalFigure: false,
      rivalFigureValue: null,
      isUserWin: false,
      isDraw: false,
    }

    this.baseState = this.state;
  }

  render() {
    if (!this.props.value) return null;

    return(
      <div className="game__board__step-two">
        <div className="step-two__figure step-two__figure__user">
          <p className="font-body_m color-white step-two__member-name">YOU PICKED</p>
          <Figure
           value={this.props.value}/>
        </div>
        {this.state.isRivalFigure ? 
          <div className="step-two__winner-status">
            <h2 className="font-head_l color-white">
              {this.state.isDraw ? 'DRAW' :  this.state.isUserWin ? `YOU WIN` : `YOU LOSE`}
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

    // Rerender stepTwo board with new state
    this.setState(state => ({
      ...state,
      isUserWin: isUserWinner,
      isDraw: isDraw,
    })); 

    // Notify Game to change Result
    if (this.state.isUserWin) return this.props.checkWinner();
  }

  // Reset previous state when change steps (on Play Again button)
  _resetComponent() {
    this.setState(this.baseState);
  }
 
}