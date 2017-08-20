// @flow
import { Strings } from '@entria/utils';

import type { RuleError } from './Validation';

export const isTrue = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const isValid = value === true;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Booleans.isTrue',
    message: 'Must be true',
  };
};

export const isFalse = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const isValid = false === true;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Booleans.isFalse',
    message: 'Must be false',
  };
};
