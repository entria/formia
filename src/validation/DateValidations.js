// @flow
import { Strings, Dates } from '@entria/utils';

import type { RuleError } from './Validation';

export const isValid = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  if (Dates.isValid(value)) {
    return null;
  }

  return {
    code: 'Validation.Dates.isValid',
    message: 'Invalid date',
  };
};

export const isFuture = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  if (Dates.isFuture(value)) {
    return null;
  }

  return {
    code: 'Validation.Dates.isFuture',
    message: 'Must be greater than today',
  };
};

export const isPast = () => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  if (Dates.isPast(value)) {
    return null;
  }

  return {
    code: 'Validation.Dates.isPast',
    message: 'Must be lesser than today',
  };
};

export const isBetween = (minor: Date, major: Date) => (value: any): RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const isBiggerThanMinor = Dates.compare(value, minor) >= 0;
  const isLessThanMajor = Dates.compare(value, major) <= 0;
  if (isBiggerThanMinor && isLessThanMajor) {
    return null;
  }

  return {
    code: 'Validation.Dates.isBetween',
    message: `Must be greater than ${minor} and lesser than ${major}`,
  };
};
