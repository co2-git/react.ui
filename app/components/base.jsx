'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style        from '../styles/base';

const { style } = Cassis;

class Base extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    return (
      <div></div>
    );
  }
}

export default Base;
