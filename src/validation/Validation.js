// @flow
import get from 'lodash.get';
import { Strings } from '@entria/utils';

export * as Booleans from './BooleanValidations';
export * as Brazil from './BrazilValidations';
export * as Dates from './DateValidations';
export * as Strings from './StringValidations';

export type RuleError = {
  code: string,
  message: string,
  params: Array<any>,
};

type ValidationValues = {
  [string]: any,
};

type ValidationRules = {
  [string]: any,
};

type ValidationErrors = {
  [string]: Array<RuleError>,
};

export const validate = (
  values: ValidationValues,
  validations: ValidationRules = {},
): ValidationErrors => {
  const errors = {};

  Object.keys(validations).forEach(field => {
    const value = get(values, field);
    const rules = validations[field];

    const fieldErrors = rules.map(rule => rule(value)).filter(error => error !== null);

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });

  return errors;
};

export const required = () => (value: any): ?RuleError => {
  const isValid = !Strings.isEmpty(value);
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.required',
    message: 'Required field',
    params: [],
  };
};
