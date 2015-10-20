'use strict';

import React from 'react';

class Dropdown extends React.Component {
  render () {
    const { children } = this.props;

    let header = 'Dropdown';

    if ( Array.isArray(children) ) {
      let hasHeader = children.reduce((header, child) => {
        if ( child.type === 'header' ) {
          header = child;
        }
        return header;
      }, null);

      if ( hasHeader ) {
        header = hasHeader;
      }
    }

    else {
      if ( children.type === 'header' ) {
        header = children;
      }
    }

    return (
      <section>
        <span>{ header }</span>
      </section>
    );
  }
}

export default Dropdown;
