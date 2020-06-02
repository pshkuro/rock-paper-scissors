import React from 'react';
import Figure from '../figure/Figure';
import '../stepOne/stepOne.scss';

export default class StepOne extends React.Component {
  render() {
    return (
      <div className="game__board__step-one">
        <Figure value="paper"/>
        <Figure value="scissors"/>
        <Figure value="rock"/>
      </div>
    );
  }
}