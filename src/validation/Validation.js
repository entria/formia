import get from 'lodash/get';
import { Strings } from '@entria/utils';

export const validate = (values, validations = {}) => {
  const errors = {};

  Object.keys(validations).forEach(field => {
    const value = get(values, field) || null;
    const rules = validations[field];
    if (!rules) {
      return;
    }

    const fieldErrors = rules.map(rule => rule(value)).filter(error => error !== null);

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });

  return errors;
};

export const required = (message = 'Campo obrigatório') => value => {
  const isValid = !Strings.isEmpty(value);
  return isValid ? null : message;
};
