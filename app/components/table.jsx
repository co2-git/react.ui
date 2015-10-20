'use strict';

import React from 'react';
import Cassis       from 'cassis';
import Style        from '../styles/table';

const { style } = Cassis;

class Table extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-table') ) {
        style.add(new Style());
      }
    }
  }

  render () {
    const classes = [this.props.className, 'reactui-table'];

    const props = ['block'];

    for ( let prop of props ) {
      if ( this.props[prop] ) {
        classes.push(`reactui-table-${prop}`);
      }
    }
    

    return (
      <table className={ classes.join(' ') }>
        { this.props.children }
      </table>
    );
  }
}

export default Table;
