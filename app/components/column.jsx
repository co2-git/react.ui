'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style from '../styles/column';

const { style } = Cassis;

class Column extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-column') ) {
        style.add(new Style());
      }
    }
  }

  style () {
    let style = {};

    if ( this.props.span ) {
      style.width = `${this.props.span}%`;
    }

    return style;
  }

  render () {
    return (
      <section className="reactui-column" style={ this.style() }>
        { this.props.children }
      </section>
    );
  }
}

export default Column;
