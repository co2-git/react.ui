'use strict';

import React from 'react';
import Style from '../styles/group';
import Cassis       from 'cassis';

const { style } = Cassis;

class Group extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-group') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    let classes = ['reactui-group'];

    if ( this.props.className ) {
      classes.push(this.props.className);
    }

    for ( let prop of ['block', 'stack', 'radius'] ) {
      if ( this.props[prop] ) {
        classes.push(`reactui-group-${prop}`);
      }
    }

    return (
      <section className={ classes.join(' ') } { ...this.props }>
        { this.props.children }
      </section>
    );
  }
}

export default Group;
