import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormReset extends Component {
  static contextTypes = {
    reset: PropTypes.func,
  };

  render() {
    return (
      <button
        type="button"
        onClick={() => this.context.reset()}
      >
        Reset
      </button>
    );
  }
}

export default FormReset;
