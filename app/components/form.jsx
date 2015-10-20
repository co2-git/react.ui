'use strict';

import React              from 'react';
import Flash              from './flash';
import Tooltip            from './tooltip';

class Form extends React.Component {

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor (props) {
    super(props);

    const { error, success } = this.props.flash || {};

    this.state = { error, success };
  }
  //
  // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //
  // componentWillReceiveProps (props) {
  //   if ( 'flash' in props ) {
  //     if ( 'validationError' in props.flash ) {
  //       this.setState({ validationError : props.flash.validationError });
  //     }
  //
  //     if ( 'successMessage' in props.flash ) {
  //       this.setState({ successMessage : props.flash.successMessage });
  //     }
  //   }
  // }
  //
  // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   validateRequired () {
     const form = React.findDOMNode(this.refs.form);

     const requiredList = form.querySelectorAll('[required]');

     const empty = [];

     for ( let i = 0; i < requiredList.length; i ++ ) {
       const value = requiredList[i].value;

       if ( ! value ) {
         empty.push(requiredList[i]);
       }
     }

     if ( empty.length ) {
       this.setState({
         error: {
           message : `${empty[0].placeholder} ${Form.REQUIRED_MESSAGE}`,
           element : empty[0]
         }
       });

       empty[0].select();

       if ( empty[0].classList.contains('reactui-input') ) {
         empty[0].classList.add('reactui-input-error');
       }

       return false;
     }

     return true;
   }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //
  // validateEmail () {
  //   let form = React.findDOMNode(this.refs.form);
  //
  //   let emails = form.querySelectorAll('[type="email"]');
  //
  //   let invalid = [];
  //
  //   for ( let i = 0; i < emails.length; i ++ ) {
  //     let value = emails[i].value;
  //
  //     if ( ! emails[i].checkValidity() ) {
  //       invalid.push(emails[i]);
  //     }
  //   }
  //
  //   if ( invalid.length ) {
  //     this.setState({ validationError: `${invalid[0].placeholder} ${Form.INVALID_EMAIL}` });
  //
  //     invalid[0].select();
  //
  //     return false;
  //   }
  //
  //   return true;
  // }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  submitHandler (e) {
    e.preventDefault();

    this.validateRequired();

    // if ( this.validateRequired() && this.validateEmail() ) {
    //   this.setState({ validationError : null });
    //   this.props.handler(e);
    // }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  render () {
    let flash;

    if ( this.state.error ) {
      flash = (
        <Tooltip target={ this.state.error.element } show>
          <Flash error message={ this.state.error.message } />
        </Tooltip>
      );
    }

    else if ( this.state.successMessage ) {
      flash = ( <Flash success message={ this.state.successMessage } /> );
    }

    let title;

    if ( this.props.title ) {
      title = ( <h2>{ this.props.title }</h2> );
    }

    return (
      <form { ...this.props } method="POST" role="form" noValidate onSubmit={ this.submitHandler.bind(this) } className="reactui-form" ref="form">
        { flash }
        { this.props.children }
      </form>
    );
  }
}

Form.REQUIRED_MESSAGE = 'can not be left empty';
Form.INVALID_EMAIL = 'must be a valid email address';

export default Form;
