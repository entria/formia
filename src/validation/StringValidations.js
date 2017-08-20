// @flow
import { Strings } from '@entria/utils';

import type { RuleError } from './Validation';

export const isAlpha = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  if (Strings.isAlpha(value)) {
    return null;
  }

  return {
    code: 'Validation.Strings.isAlpha',
    message: 'Only alpha characters are allowed',
  };
};

export const isEmail = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  if (Strings.isEmail(value)) {
    return null;
  }

  return {
    code: 'Validation.Strings.isEmail',
    message: 'Invalid email address',
  };
};

export const minLength = (quantity: number) => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const isValid = value.length >= quantity;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Strings.minLength',
    message: `Must have at least ${quantity} characters`,
  };
};

export const minWords = (quantity: number) => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const words = value ? value.trim().split(' ') : '';
  const isValid = words.length >= quantity;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Strings.minWords',
    message: `Must have at least ${quantity} words`,
  };
};
