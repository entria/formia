import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../src';
import FormInput from './FormInput';
import FormReset from './FormReset';
import FormSubmit from './FormSubmit';

class CustomForm extends Component {
  static contextTypes = {
    getValues: PropTypes.func,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.context.getValues());
  }

  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {children}
      </form>
    );
  }
}

const CustomFormWrapper = ({ onChange, ...props }) =>
  <Form onChange={onChange}>
    <CustomForm {...props} />
  </Form>;

CustomFormWrapper.Input = FormInput;
CustomFormWrapper.Reset = FormReset;
CustomFormWrapper.Submit = FormSubmit;

CustomFormWrapper.defaultProps = {
  onSubmit: () => null,
  onChange: () => null,
};

CustomFormWrapper.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default CustomFormWrapper;
