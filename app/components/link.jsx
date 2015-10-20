'use strict';

import React from 'react';

class Link extends React.Component {

  static go (target) {
    return new Promise((ok, ko) => {
      try {
        window.history.pushState(null, null, target);
        ok();
      }
      catch ( error ) {
        ko(error);
      }
    });
  }

  go (e) {
    e.preventDefault();

    Link.go(this.props.to || this.props.href).then(() => {
      if ( this.props.onClick ) {
        this.props.onClick(e);
      }
    });
  }

  render () {
    return (
      <a { ...this.props } href={ this.props.to || this.props.href } onClick={ this.go.bind(this) }>
        { this.props.children }
      </a>
    );
  }
}

export default Link;
