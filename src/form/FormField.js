// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import type { OnChange, FieldErrors } from './Form';

type Props = {
  name: string,
  component: any,
  onChange?: OnChange,
};
type State = {
  value: any,
};
class FormField extends Component<Props, State> {
  static defaultProps = {
    onChange: () => null,
  };

  static contextTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    getError: PropTypes.func,
    isDirty: PropTypes.func,
    isPristine: PropTypes.func,
  };

  state = {
    value: null,
  };

  setValue = (value: any) => {
    const { setValue } = this.context;
    const { name, onChange } = this.props;

    setValue(name, value, (values, errors) => {
      this.setState({ value }, () => onChange(values, errors));
    });
  };

  getValue = (): any => {
    const { getValue } = this.context;
    const { name } = this.props;

    return getValue(name);
  };

  getError = (): FieldErrors => {
    const { getError } = this.context;
    const { name } = this.props;

    return getError(name);
  };

  isDirty = (): boolean => {
    const { isDirty } = this.context;
    const { name } = this.props;

    return isDirty(name);
  };

  isPristine = (): boolean => {
    const { isPristine } = this.context;
    const { name } = this.props;

    return isPristine(name);
  };

  render() {
    const CustomComponent = this.props.component;

    return (
      <CustomComponent
        {...this.props}
        setValue={this.setValue}
        value={this.getValue()}
        dirty={this.isDirty()}
        pristine={this.isPristine()}
        error={this.getError()}
      />
    );
  }
}

export default FormField;
