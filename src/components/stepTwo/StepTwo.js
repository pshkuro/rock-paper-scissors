import React from 'react';
import '../stepTwo/stepTwo.scss';
import Figure from '../figure/Figure';

export default class StepTwo extends React.Component {
  render() {
    return(
      <div className="game__board__step-two">
        <div className="step-two__user-figure"></div>
        <div className="step-two__rival-figure"></div>
      </div>
    );
  }
}