// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  name: string,
  component: any,
  onChange?: any,
};
class FormField extends Component<Props, void> {
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

  setValue = (value: any) => {
    const { setValue } = this.context;
    const { name, onChange } = this.props;

    setValue(name, value, onChange);
  };

  getValue = () => {
    const { getValue } = this.context;
    const { name } = this.props;

    return getValue(name);
  };

  getError = () => {
    const { getError } = this.context;
    const { name } = this.props;

    return getError(name);
  };

  isDirty = () => {
    const { isDirty } = this.context;
    const { name } = this.props;

    return isDirty(name);
  };

  isPristine = () => {
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
