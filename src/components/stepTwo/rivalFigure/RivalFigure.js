import React from 'react';
import Figure from '../../figure/Figure';

export default class RivalFigure extends React.Component {
  componentDidMount() {
    setTimeout(this.props.showRivalFigure, 1000)
  }

  render() {
    return(
      <div className="step-two__figure step-two__figure__rival">
          <p className="font-body_m color-white step-two__member-name">THE HOUSE PICKED</p>
          {this.props.value ? <Figure value={this.props.value}/> : <div className="step-two__figure__rival-empty"></div>}
        </div>
    );
  }

}