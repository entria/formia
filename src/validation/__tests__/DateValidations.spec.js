import * as Dates from '../DateValidations';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('isValid - empty', () => {
  expect(Dates.isValid()()).toMatchSnapshot();
});

it('isValid - valid date', () => {
  expect(Dates.isValid()('2000-01-01')).toMatchSnapshot();
});

it('isValid - invalid date', () => {
  expect(Dates.isValid()('2000-01-35')).toMatchSnapshot();
});

it('isFuture - empty', () => {
  expect(Dates.isFuture()()).toMatchSnapshot();
});

it('isFuture - future date', () => {
  expect(Dates.isFuture()('2050-01-01')).toMatchSnapshot();
});

it('isFuture - past date', () => {
  expect(Dates.isFuture()('2000-01-01')).toMatchSnapshot();
});

it('isPast - empty', () => {
  expect(Dates.isPast()()).toMatchSnapshot();
});

it('isPast - past date', () => {
  expect(Dates.isPast()('2000-01-01')).toMatchSnapshot();
});

it('isPast - future date', () => {
  expect(Dates.isPast()('2050-01-01')).toMatchSnapshot();
});

it('isBetween - empty', () => {
  expect(Dates.isBetween('2000-01-01', '2000-12-31')()).toMatchSnapshot();
});

it('isBetween - is between', () => {
  expect(Dates.isBetween('2000-01-01', '2000-12-31')('2000-01-01')).toMatchSnapshot();
});

it('isBetween - is not between', () => {
  expect(Dates.isBetween('2000-01-01', '2000-12-31')('2050-01-01')).toMatchSnapshot();
});
