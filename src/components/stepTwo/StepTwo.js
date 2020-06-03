import React from 'react';
import '../stepTwo/stepTwo.scss';
import Figure from '../figure/Figure';

export default class StepTwo extends React.Component {
  render() {
    
    return(
      <div className="game__board__step-two">
        <div className="step-two__figure step-two__figure__user">
          <p className="font-body_m color-white step-two__member-name">YOU PICKED</p>
          <Figure value="paper"/>
        </div>
        <div className="step-two__winner-status">
          <h2 className="font-head_l color-white">YOU WIN</h2>
          <button className="button button_theme_white">PLAY AGAIN</button>
        </div>
        <div className="step-two__figure step-two__figure__rival">
          <p className="font-body_m color-white step-two__member-name">THE HOUSE PICKED</p>
          <div className="step-two__figure__rival-empty"></div>
          {/* <Figure value="rock"/> */}
        </div>
      </div>
    );
  }
}