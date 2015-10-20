'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style from '../styles/h3';

const { style } = Cassis;

class H3 extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-h3') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    return (
      <h3 className="reactui-h3">{ this.props.children }</h3>
    );
  }
}

export default H3;
