import React from 'react';
import RulesContent from '../rules/rulesContent/RulesContent';
import '../rules/rules.scss';

export default class Rules extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false,
    }
  }

  render() {
    return (
      <div className="game__rules">
        <div className="game__rules__button">
        <button 
        className="button button_theme_transparent" 
        onClick={() => this.open()}>
          Rules
        </button>
        </div>
        <RulesContent 
        opened={this.state.opened} 
        onClose={() => this.close()} />
      </div>
    );
  }

  open() {
    this.setState({opened: true});
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.setState({opened: false});
    document.body.style.overflow = 'visible';
  }
}