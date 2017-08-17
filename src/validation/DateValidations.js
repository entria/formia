import { Strings, Dates } from '@entria/utils';

export const isValid = (message = 'Invalid date') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return Dates.isValid(value) ? null : message;
};

export const isFuture = (message = 'Must be greater than today') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return Dates.isFuture(value) ? null : message;
};

export const isPast = (message = 'Must be lesser than today') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  return Dates.isPast(value) ? null : message;
};

export const isBetween = (
  minor,
  major,
  message = 'Must be greater than $1 and lesser than $2',
) => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const isBiggerThanMinor = Dates.compare(value, minor) >= 0;
  const isLessThanMajor = Dates.compare(value, major) <= 0;

  return isBiggerThanMinor && isLessThanMajor
    ? null
    : message.replace('$1', minor).replace('$2', major);
};
