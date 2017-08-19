import React from 'react';
import PropTypes from 'prop-types';

const FormButton = props =>
  <button {...props} />;

FormButton.defaultProps = {
  type: 'button',
};

FormButton.propTypes = {
  type: PropTypes.string,
};

export default FormButton;
