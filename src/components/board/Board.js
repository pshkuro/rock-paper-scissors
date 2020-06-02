import React from 'react';
import '../board/board.scss';
import StepOne from '../stepOne/StepOne';
import StepTwo from '../stepTwo/StepTwo';

export default class Board extends React.Component {
  render() {
    return(
      <div className="game__board">
        <StepOne />
        <StepTwo />
      </div>
    );
  }
}

