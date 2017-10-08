// @flow
import { isEmpty } from '@entria/utils';

import type { RuleError } from './Validation';

export const isTrue = () => (value: any): ?RuleError => {
  if (isEmpty(value)) {
    return null;
  }

  const isValid = value === true;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Booleans.isTrue',
    message: 'Must be true',
    params: [],
  };
};

export const isFalse = () => (value: any): ?RuleError => {
  if (isEmpty(value)) {
    return null;
  }

  const isValid = value === false;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Booleans.isFalse',
    message: 'Must be false',
    params: [],
  };
};
