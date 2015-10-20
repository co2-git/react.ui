'use strict';

import React from 'react';
import Input from './input';

class EmailInput extends React.Component {
  render () {
    return (
      <Input type="email" { ...this.props } />
    );
  }
}

export default EmailInput;
