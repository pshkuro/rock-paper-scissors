import React from 'react';
import Figure from '../figure/Figure';
import '../stepOne/stepOne.scss';
import {FIGURES} from '../../const';

export default class StepOne extends React.Component {
  render() {
    if (this.props.value) return null;

    return (
      <div className="game__board__step-one">
        {FIGURES.map((figure) => {
          return <Figure
                  value={figure}
                  onClick={(value) => this.props.setValue(value)}
                  key={figure}/>
        })}
      </div>
    );
  }

}