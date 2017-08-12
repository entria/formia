import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.any,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
  };

  static contextTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
  };

  render() {
    const { getValue, setValue } = this.context;
    const { name, type, label, placeholder } = this.props;

    return (
      <div style={styles.group}>
        {label &&
          <label htmlFor={name}>{label}</label>}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={getValue(name) || ''}
          onChange={event => setValue(name, event.target.value)}
          style={styles.field}
        />
      </div>
    );
  }
}

const styles = {
  group: {
    width: '100%',
    marginBottom: 15,
  },
  field: {
    width: '100%',
  },
};

export default FormInput;
