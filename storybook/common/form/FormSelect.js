import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../src';
import FormGroup from './FormGroup';

class FormSelect extends Component {
  static propTypes = {
    label: PropTypes.any,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
      })
    ),
    // debug mode
    debug: PropTypes.bool,
    // injected by Form.Field
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.any,
    dirty: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    error: PropTypes.array,
  };

  static defaultProps = {
    label: '',
    options: [],
    // debug mode
    debug: false,
    // injected by Form.Field
    value: null,
    error: null,
  };

  getDefaultValue = value => {
    let defaultIndex = 0;

    this.props.options.forEach((option, index) => {
      if (option.value === value) {
        defaultIndex = index;
      }
    });

    return defaultIndex;
  }

  render() {
    const {
      label,
      options,
      // debug mode
      debug,
      // injected by Form.Field
      name,
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
        <select
          id={name}
          defaultValue={this.getDefaultValue(value)}
          onChange={event => setValue(options[event.target.value].value)}
          style={styles.field}
        >
          {options.map((option, index) => (
            <option
              key={option.value}
              value={index}
            >
              {option.label}
            </option>
          ))}
        </select>
      </FormGroup>
    );
  }
}

const FormSelectField = props => <Form.Field component={FormSelect} {...props} />

const styles = {
  field: {
    width: '100%',
  },
};

export default FormSelectField;
