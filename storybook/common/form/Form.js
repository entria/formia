import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../src';
import FormGroup from './FormGroup';
import FormInput from './FormInput';
import FormReset from './FormReset';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';

class CustomForm extends Component {
  static contextTypes = {
    getValues: PropTypes.func,
    getErrors: PropTypes.func,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const values = this.context.getValues();
    const errors = this.context.getErrors();

    this.props.onSubmit(values, errors);
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

const CustomFormWrapper = ({ validations, onChange, ...props }) =>
  <Form validations={validations} onChange={onChange}>
    <CustomForm {...props} />
  </Form>;

CustomFormWrapper.Group = FormGroup;
CustomFormWrapper.Input = FormInput;
CustomFormWrapper.Reset = FormReset;
CustomFormWrapper.Select = FormSelect;
CustomFormWrapper.Submit = FormSubmit;

CustomFormWrapper.defaultProps = {
  onSubmit: () => null,
  onChange: () => null,
  validations: {},
};

CustomFormWrapper.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  validations: PropTypes.object,
};

export default CustomFormWrapper;
