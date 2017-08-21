import * as Booleans from '../BooleanValidations';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('isTrue - empty', () => {
  expect(Booleans.isTrue()()).toMatchSnapshot();
});

it('isTrue - true', () => {
  expect(Booleans.isTrue()(true)).toMatchSnapshot();
});

it('isTrue - another value', () => {
  expect(Booleans.isTrue()('anything here')).toMatchSnapshot();
});

it('isFalse - empty', () => {
  expect(Booleans.isFalse()()).toMatchSnapshot();
});

it('isFalse - false', () => {
  expect(Booleans.isFalse()(false)).toMatchSnapshot();
});

it('isFalse - another value', () => {
  expect(Booleans.isFalse()('anything here')).toMatchSnapshot();
});
