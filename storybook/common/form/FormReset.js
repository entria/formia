import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormButtom from './FormButton';

class FormReset extends Component {
  static contextTypes = {
    reset: PropTypes.func,
  };

  render() {
    return (
      <FormButtom onClick={() => this.context.reset()}>
        Reset
      </FormButtom>
    );
  }
}

export default FormReset;
