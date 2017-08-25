// @flow
import { Component } from 'react';
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

type Validations = {
  [string]: Array<any>,
};

export type OnChange = (values: Values, errors: FormErrors) => void;

type FormErrors = {
  [string]: FieldErrors,
};
export type FieldErrors = Array<Error>;
type Error = {
  code: string,
  message: string,
  params: Array<any>,
};

type Props = {
  initialValues?: Values,
  validations?: Validations,
  onChange?: OnChange,
};
type State = {
  values: Values,
};
class Form extends Component<Props, State> {
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
      setValue: (name: string, value: any, onChange: OnChange) =>
        this.setValue(name, value, onChange),
      getValue: (name: string): any => this.getValue(name),
      getValues: (): Values => this.getValues(),
      getError: (name: string): FieldErrors => this.getError(name),
      getErrors: (): FormErrors => this.getErrors(),
      isDirty: (name: string): boolean => this.isDirty(name),
      isPristine: (name: string): boolean => this.isPristine(name),
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

  setValue = (name: string, value: any, onChange: OnChange) => {
    const values = {
      ...this.state.values,
    };

    set(values, name, value);

    this.setState({ values }, () => {
      const errors = this.getErrors();

      this.props.onChange(values, errors);
      onChange(values, errors);
    });
  };

  getValue = (name: string): any => get(this.state.values, name, null);

  getValues = (): Values => this.state.values;

  getError = (name: string): FieldErrors => {
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

  getErrors = (): FormErrors => {
    const { validations } = this.props;
    const { values } = this.state;

    return Validation.validate(values, validations);
  };

  isDirty = (name: string): boolean => {
    const currentValue = this.getValue(name);
    const initialValue = get(this.props.initialValues, name, null);

    return !isEqual(currentValue, initialValue);
  };

  isPristine = (name: string): boolean => {
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
