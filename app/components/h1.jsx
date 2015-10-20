'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style from '../styles/h1';

const { style } = Cassis;

class H1 extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-h1') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    return (
      <h1 className="reactui-h1">{ this.props.children }</h1>
    );
  }
}

export default H1;
