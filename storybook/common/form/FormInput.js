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
    error: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    // debug mode
    debug: false,
    // injected by Form.Field
    value: '',
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
          <label htmlFor={name}>{label}</label>}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={event => setValue(event.target.value)}
          style={styles.field}
        />

        {debug &&
          <div style={styles.debug}>
            <p>dirty: {dirty}</p>
            <p>pristine: {pristine}</p>
            <p>error: {JSON.stringify(error)}</p>
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
  field: {
    width: '100%',
  },
  debug: {
    marginTop: 15,
  }
};

export default FormInputField;
