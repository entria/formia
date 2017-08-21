// @flow
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import set from 'lodash.set';
import isEqual from 'lodash.isequal';

import { Validation } from '../';
import FormField from './FormField';
import { handleInitialValuesUpdate } from './utils';

type Values = {
  [string]: any,
};

type Props = {
  initialValues?: Values,
  validations?: Object,
  onChange?: any,
};
type State = {
  values: Values,
};
class Form extends PureComponent<Props, State> {
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
    isDirty: PropTypes.func,
    isPristine: PropTypes.func,
    reset: PropTypes.func,
  };

  state = {
    values: this.props.initialValues,
  };

  getChildContext() {
    return {
      setValue: (name: string, value: any, onChange: any) => this.setValue(name, value, onChange),
      getValue: (name: string) => this.getValue(name),
      getValues: () => this.getValues(),
      getError: (name: string) => this.getError(name),
      getErrors: () => this.getErrors(),
      isDirty: (name: string) => this.isDirty(name),
      isPristine: (name: string) => this.isPristine(name),
      reset: () => this.reset(),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const currentValues = { ...this.state.values };
    const currentInitialvalues = { ...this.props.initialValues };
    const newInitialValues = { ...nextProps.initialValues };

    const values = handleInitialValuesUpdate(currentValues, currentInitialvalues, newInitialValues);
    this.setState({ values });
  }

  setValue = (name: string, value: any, onChange: any) => {
    const values = {
      ...this.state.values,
    };

    set(values, name, value);

    this.setState({ values }, () => {
      this.props.onChange(values);
      onChange(values);
    });
  };

  getValue = (name: string) => get(this.state.values, name, null);

  getValues = () => this.state.values;

  getError = (name: string) => {
    const { validations } = this.props;
    if (!validations || !validations[name]) {
      return null;
    }

    const errors = Validation.validate(
      { [name]: this.getValue(name) },
      { [name]: validations[name] },
    );

    return errors[name] ? errors[name] : null;
  };

  getErrors = () => {
    const { validations } = this.props;
    const { values } = this.state;

    return Validation.validate(values, validations);
  };

  isDirty = (name: string) => {
    const currentValue = this.getValue(name);
    const initialValue = get(this.props.initialValues, name, null);

    return !isEqual(currentValue, initialValue);
  };

  isPristine = (name: string) => {
    const currentValue = this.getValue(name);
    const initialValue = get(this.props.initialValues, name, null);

    return isEqual(currentValue, initialValue);
  };

  reset = () =>
    this.setState({
      values: this.props.initialValues,
    });

  render() {
    return this.props.children;
  }
}

Form.Field = FormField;

export default Form;
