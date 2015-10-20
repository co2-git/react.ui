'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style from '../styles/h2';

const { style } = Cassis;

class H2 extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-h2') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    return (
      <h2 className="reactui-h2">{ this.props.children }</h2>
    );
  }
}

export default H2;
