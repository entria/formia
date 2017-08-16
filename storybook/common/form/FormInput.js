import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../src';
import FormGroup from './FormGroup';

class FormInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.any,
    placeholder: PropTypes.string,
    // debug mode
    debug: PropTypes.bool,
    // injected by Form.Field
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string,
    dirty: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    error: PropTypes.array,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    // debug mode
    debug: false,
    // injected by Form.Field
    value: null,
    error: null,
  };

  render() {
    const {
      name,
      type,
      label,
      placeholder,
      // debug mode
      debug,
      // injected by Form.Field
      setValue,
      value,
      dirty,
      pristine,
      error,
    } = this.props;

    return (
      <FormGroup
        name={name}
        debug={debug}
        label={label}
        dirty={dirty}
        pristine={pristine}
        error={error}
      >
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={event => setValue(event.target.value)}
          style={styles.field}
        />
      </FormGroup>
    );
  }
}

const FormInputField = props => <Form.Field component={FormInput} {...props} />

const styles = {
  field: {
    width: '100%',
  },
};

export default FormInputField;
