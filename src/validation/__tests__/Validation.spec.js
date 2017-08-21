import * as Validation from '../Validation';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('validate - empty', () => {
  const values = {};
  const validations = {};

  expect(Validation.validate(values, validations)).toMatchSnapshot();
});

it('validate - valid instance', () => {
  const values = { name: 'John Doe' };
  const validations = { name: [Validation.required()] };

  expect(Validation.validate(values, validations)).toMatchSnapshot();
});

it('validate - invalid instance', () => {
  const values = {};
  const validations = { name: [Validation.required()] };

  expect(Validation.validate(values, validations)).toMatchSnapshot();
});

it('required - empty', () => {
  expect(Validation.required()()).toMatchSnapshot();
});

it('required - filled', () => {
  expect(Validation.required()('Anything here')).toMatchSnapshot();
});
