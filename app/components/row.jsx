'use strict';

import React        from 'react';
import Cassis       from 'cassis';
import Style        from '../styles/row';

const { style } = Cassis;

class Row extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-row') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    return (
      <div className="reactui-row">
        { this.props.children }
      </div>
    );
  }
}

export default Row;
