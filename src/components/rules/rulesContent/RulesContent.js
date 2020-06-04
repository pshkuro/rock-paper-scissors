import React from 'react';
import '../rulesContent/rulesContent.scss';

export default class RulesContent extends React.Component {
  
  render() {
    if (!this.props.opened) return null;
    
    return (
      <div className="game__rules__content">
        <div className="rules__content__container">
            <h4 className="font-head_s color-dark-blue rules__content__title">RULES</h4>
            <div className="rules__content__close" onClick={() => this.props.onClose()}></div>
          <div className="content__row rules__content__row__image">
            <img 
            src={require(`../../../images/image-rules.svg`)}
            alt="Game Rules"
            className="img img__rules"/>
          </div>
        </div>
      </div>
    );
  }
}