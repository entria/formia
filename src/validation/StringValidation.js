import { Strings } from '@entria/utils';

export const alpha = (message = 'Only alpha characters are allowed') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return Strings.isAlpha(value) ? null : message;
};

export const email = (message = 'Invalid email address') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return Strings.isEmail(value) ? null : message;
};

export const minLength = (quantity, message = 'Must have at least $1 characters') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return value.length >= quantity ? null : message.replace('$1', quantity);
};

export const minWords = (quantity, message = 'Must have at least $1 words') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const words = value ? value.trim().split(' ') : '';

  return words.length >= quantity ? null : message.replace('$1', quantity);
};
