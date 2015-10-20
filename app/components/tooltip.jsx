'use strict';

import React            from 'react';
import Cassis           from 'cassis';
import Style            from '../styles/tooltip';

const { style } = Cassis;

class Tooltip extends React.Component {

  constructor (props) {
    super(props);

    if ( typeof window !== 'undefined' ) {
      if ( ! style.has('.reactui-tooltip') ) {
        style.add(new Style());
      }
    }
  }

  componentDidMount () {

    if ( this.props.target instanceof HTMLElement ) {
      this.target = this.props.target;
    }

    else {
      this.target = React.findDOMNode(this._reactInternalInstance._currentElement._owner._instance.refs[this.props.target]);
    }

    const tooltip = React.findDOMNode(this.refs.tooltip);

    this.target.addEventListener('mouseover', () => this.show());

    this.target.addEventListener('mouseout', () => {
      this.clone.classList.remove('reactui-tooltip-show');
    });

    if ( this.props.show ) {
      setTimeout(() => this.show());
    }
  }

  show () {
    const tooltip = React.findDOMNode(this.refs.tooltip);

    if ( ! this.clone ) {
      this.clone = tooltip.cloneNode(true);
      document.body.appendChild(this.clone);
    }

    const _target_ = this.target.getBoundingClientRect();

    this.clone.classList.add('reactui-tooltip-show');

    const _tooltip_ = this.clone.getBoundingClientRect();

    const rectangles = {
      top : {
        left : _target_.left + ( _target_.width / 2 ) - ( _tooltip_.width / 2 ),
        top : window.pageYOffset + _target_.top - ( _tooltip_.height ) - 20
      },
      bottom : {
        left : _target_.left + ( _target_.width / 2 ) - ( _tooltip_.width / 2 ),
        top : window.pageYOffset + _target_.top + ( _target_.height ) + 20
      },
      left : {
        left : _target_.left - _tooltip_.width - 30,
        top : window.pageYOffset + _target_.top + ( _target_.height / 2 ) - ( _tooltip_.height / 2 )
      },
      right : {
        left : _target_.right + 30,
        top : window.pageYOffset + _target_.top + ( _target_.height / 2 ) - ( _tooltip_.height / 2 )
      }
    };

    let position = 'top';

    if ( rectangles.top.top < 60 ) {
      position = 'bottom';
    }

    if ( window.innerWidth > 400 ) {
      if ( (rectangles.top.left + _tooltip_.width ) > window.innerWidth && (_tooltip_.width + 100) < window.innerWidth ) {
        position = 'left';
      }

      if ( rectangles.top.left < 0 && (_tooltip_.width + 100) < window.innerWidth ) {
        position = 'right';
      }

      this.clone.style.left = rectangles[position].left + 'px';
    }

    else {
      tooltip.style.left = '0px';
      tooltip.style.width = '91%';
    }

    console.log({ position, rectangle : rectangles[position] });

    this.clone.style.top = rectangles[position].top + 'px';

    this.clone.classList.remove('reactui-tooltip-bottom');
    this.clone.classList.remove('reactui-tooltip-top');
    this.clone.classList.remove('reactui-tooltip-right');
    this.clone.classList.remove('reactui-tooltip-left');
    this.clone.classList.add(`reactui-tooltip-${position}`);
  }

  render () {
    return (
      <section className="reactui-tooltip" ref="tooltip">
        { this.props.children }
      </section>
    );
  }
}

export default Tooltip;
