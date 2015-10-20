'use strict';

import React              from 'react';
import Icon               from './icon';
import Cassis             from 'cassis';
import Style              from '../styles/flash';
import config             from '../../config.json';

const { style } = Cassis;

class Flash extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-flash') ) {
        style.add(new Style());
      }
    }
  }

  close () {
    React.findDOMNode(this.refs.flash).style.display = 'none';
  }

  render () {
    let classes = ['reactui-flash', this.props.className];

    for ( let color in config.colors ) {
      if ( this.props[color] ) {
        classes.push(`reactui-flash-${color}`);
      }
    }

    let close;

    if ( this.props.close !== false ) {
      close = (
        <div className="reactui-flash-close" onClick={ this.close.bind(this) }>
          <Icon icon="times" />
        </div>
      );
    }

    if ( typeof this.props.close === 'number' ) {
      setTimeout(() => this.close(), this.props.close);
    }

    return (
      <div className={ classes.join(' ') } ref="flash">
        <div>{ this.props.children || this.props.message }</div>
        { close }
      </div>
    );
  }
}

export default Flash;
