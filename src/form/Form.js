import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import set from 'lodash/set';

import { Validation } from '../';

class Form extends PureComponent {
  static propTypes = {
    initialValues: PropTypes.object,
    validations: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    initialValues: {},
    validations: {},
    onChange: () => null,
  };

  static childContextTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    getValues: PropTypes.func,
    getError: PropTypes.func,
    getErrors: PropTypes.func,
    reset: PropTypes.func,
  };

  state = {
    values: this.props.initialValues,
  };

  getChildContext() {
    return {
      setValue: (name, value, onChange) => this.setValue(name, value, onChange),
      getValue: name => this.getValue(name),
      getValues: () => this.getValues(),
      getError: name => this.getError(name),
      getErrors: () => this.getErrors(),
      reset: () => this.reset(),
    };
  }

  setValue = (name, value, onChange) => {
    const values = {
      ...this.state.values,
    };

    set(values, name, value);

    this.setState({ values }, () => {
      this.props.onChange(values);
      onChange(values);
    });
  };

  getValue = name => get(this.state.values, name) || null;

  getValues = () => this.state.values;

  getError(name) {
    const { validations } = this.props;
    if (!validations || !validations[name]) {
      return null;
    }

    const errors = Validation.validate(
      { [name]: this.getValue(name) },
      { [name]: validations[name] },
    );

    return errors[name] ? errors[name] : null;
  }

  getErrors() {
    const { validations } = this.props;
    const { values } = this.state;

    return Validation.validate(values, validations);
  }

  reset = () =>
    this.setState({
      values: this.props.initialValues,
    });

  render() {
    return this.props.children;
  }
}

export default Form;
