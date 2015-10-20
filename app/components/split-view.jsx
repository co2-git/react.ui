'use strict';

import React        from 'react';
import Cassis       from 'cassis';
import Style        from '../styles/split-view';

const { style } = Cassis;

class SplitView extends React.Component {
  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-split-view') ) {
        style.add(new Style());
      }
    }
  }

  style () {
    let style = {};

    for ( let prop of ['height'] ) {
      if ( prop in this.props ) {
        style[prop] = this.props[prop];
      }
    }

    return style;
  }

  render () {
    return (
      <div className="reactui-split-view" style={ this.style() }>
        { this.props.children }
      </div>
    );
  }
}

export default SplitView;
