import React from 'react';
import '../results/result.scss';

export default class Results extends React.Component {
  render() {
    return(
      <div className="game__header">
        <h3 className="game__header__title font-head_m color-white">ROCK<br/>
           PAPER<br/>
           SCISSORS</h3>
        <div className="game__results">
          <p className ="font-body_s color-light-blue game__results__title">SCORE</p>
        <h1 className="font-head_xl color-grey">{this.props.value}</h1>
        </div>
      </div>
    );
  }
}