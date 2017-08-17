import { Strings } from '@entria/utils';

export const isTrue = (message = 'Must be true') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return value === true ? null : message;
};

export const isFalse = (message = 'Must be false') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return value === false ? null : message;
};
