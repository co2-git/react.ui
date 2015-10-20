'use strict';

import React from 'react';

class TopBar extends React.Component {
  render () {
    let { brand } = this.props;

    return (
      <section>
        <strong>{ brand }</strong>
      </section>
    );
  }
}

export default TopBar;
