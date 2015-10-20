'use strict';

import React from 'react';
import { EventEmitter } from 'events';

class Styles extends EventEmitter {
  constructor (component) {
    super();
    this.component = component;
    this.rules = [];
  }

  append (style) {
    this.rules.push(style);
    this.emit('changed');
  }
}

class Style extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      window.reactUI = new Styles(this);

      const { rules } = window.reactUI;

      window.reactUI.on('changed', () => this.setState({ rules : window.reactUI.rules }));

      this.state = { rules };
    }
  }

  render () {
    let source = '';

    this.state.rules.forEach(rule => source += rule.render());

    // this.state.rules.forEach(rule => console.log(rule.render()));

    return (
      <style dangerouslySetInnerHTML={{__html: source}}>
      </style>
    );
  }
}

export default Style;
