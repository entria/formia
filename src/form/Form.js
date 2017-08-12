import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import set from 'lodash/set';

class Form extends PureComponent {
  static propTypes = {
    initialValues: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    initialValues: {},
    onChange: () => null,
  };

  static childContextTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    getValues: PropTypes.func,
    reset: PropTypes.func,
  };

  state = {
    values: this.props.initialValues,
  };

  getChildContext() {
    return {
      setValue: (name, value) => this.setValue(name, value),
      getValue: name => this.getValue(name),
      getValues: () => this.getValues(),
      reset: () => this.reset(),
    };
  }

  setValue = (name, value) => {
    const values = {
      ...this.state.values,
    };

    set(values, name, value);

    this.setState({ values }, () => this.props.onChange(values));
  };

  getValue = name => get(this.state.values, name) || null;

  getValues = () => this.state.values;

  reset = () =>
    this.setState({
      values: this.props.initialValues,
    });

  render() {
    return this.props.children;
  }
}

export default Form;
