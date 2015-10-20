'use strict';

import React              from 'react';
import Icon               from './icon';

class Modal extends React.Component {
  close () {
    React.findDOMNode(this.refs.modal).classList.remove('bp_modal--show');
  }

  render () {
    let icon;

    if ( this.props.icon ) {
      icon = ( <span><Icon icon={ this.props.icon } /> </span> );
    }

    return (
      <section className="bp_modal" ref="modal">
        <section className="bp_modal_cover" onClick={ this.close.bind(this) }></section>
        <section className="bp_modal_content">
          <section className="bp_modal_header">
            <Icon icon="times" size="2" onClick={ this.close.bind(this) } className="bp_modal_close" />
            <h4>{ icon }{ this.props.title }</h4>
          </section>
          <section className="bp_modal_body">
            { this.props.children }
          </section>
        </section>
      </section>
    );
  }
}

export default Modal;
