import get from 'lodash/get';
import { Strings } from '@entria/utils';

export * as String from './StringValidation';

type Error = {
  code: string,
  message: string,
};

type ValidationValues = {
  [string]: any,
};

type ValidationRules = {
  [string]: any,
};

type ValidationErrors = {
  [string]: Array<Error>,
};

export const validate = (
  values: ValidationValues,
  validations: ValidationRules = {},
): ValidationErrors => {
  const errors = {};

  Object.keys(validations).forEach(field => {
    const value = get(values, field);
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

export const required = (message = 'Required field') => value => {
  const isValid = !Strings.isEmpty(value);
  return isValid ? null : message;
};
