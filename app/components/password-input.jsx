'use strict';

import React from 'react';
import Input from './input';

class PasswordInput extends React.Component {
  render () {
    return (
      <Input type="password" { ...this.props } />
    );
  }
}

export default PasswordInput;
