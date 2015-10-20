'use strict';

import React        from 'react';
import Cassis       from 'cassis';
import Style        from '../styles/button';

const { style } = Cassis;

class Button extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-button') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    let classes = ['reactui-button'];

    if ( this.props.className ) {
      classes.push(this.props.className);
    }

    for ( let prop of ['block', 'medium', 'large', 'error', 'success', 'warning', 'primary'] ) {
      if ( this.props[prop] ) {
        classes.push(`reactui-button-${prop}`);
      }
    }

    return (
      <button
        { ...this.props }
        type        =   { this.props.type || 'button' }
        className   =   { classes.join(' ') }
        >{ this.props.children }</button>
    );
  }
}

export default Button;
