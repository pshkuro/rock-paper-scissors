import React from 'react';
import '../board/board.scss';
import StepOne from '../stepOne/StepOne';
import StepTwo from '../stepTwo/StepTwo';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      figureValue: null,
    };
  }

  render() {
    return(
      <div className="game__board">
        <StepOne 
        value={this.state.figureValue}
        setValue={(value) => this.setValue(value)}/> 
  
        <StepTwo
        value={this.state.figureValue}
        setValue={(value) => this.setValue(value)}
        checkWinner = {() => this.props.checkWinner()}/>
      </div>
    );
  }

  setValue(value) {
    this.setState({figureValue: value});
  }
}

