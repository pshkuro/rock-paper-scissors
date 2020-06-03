import React from 'react';
import '../figure/figure.scss';

export default class Figure extends React.Component {
  render() {
    return(
      <div
        className={`game__figure game__figure-${this.props.value}`}
        onClick={() => this.props.onClick(this.props.value)}
      >
        <div className="game__figure__shadow-container">
          <img
            src={require(`../../images/icon-${this.props.value}.svg`)}
            alt={`${this.props.value}-figure`}
            className="img img__figure"
          />
        </div>
      </div>
    );
  }
}