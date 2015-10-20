'use strict';

import React from 'react';
import Cassis from 'cassis';
import Style from '../styles/input';

const { style } = Cassis;

class Input extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-input') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    let classes = ['reactui-input'];

    if ( this.props.className ) {
      classes.push(this.props.className);
    }

    for ( let prop of ['block', 'medium', 'large', 'error', 'success', 'warning'] ) {
      if ( this.props[prop] ) {
        classes.push(`reactui-input-${prop}`);
      }
    }

    return (
      <input type={ this.props.type || 'text' } className={ classes.join(' ') } { ...this.props }  />
    );
  }
}

export default Input;
