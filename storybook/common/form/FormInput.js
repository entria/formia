import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../src';

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
      <div style={styles.group}>
        {label &&
          <label htmlFor={name} style={styles.label}>{label}</label>}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={event => setValue(event.target.value)}
          style={styles.field}
        />

        {dirty && error &&
          <div style={styles.error}>
            {error.map(err => <div key={err}>{err}</div>)}
          </div>}

        {debug &&
          <div style={styles.debug}>
            <div>dirty: {dirty.toString()}</div>
            <div>pristine: {pristine.toString()}</div>
            <div>error: {JSON.stringify(error)}</div>
          </div>}
      </div>
    );
  }
}

const FormInputField = props => <Form.Field component={FormInput} {...props} />

const styles = {
  group: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  field: {
    width: '100%',
  },
  debug: {
    marginTop: 5,
  },
  error: {
    marginTop: 5,
    color: '#d9534f',
  },
};

export default FormInputField;
