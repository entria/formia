import * as Strings from '../StringValidations';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('isAlpha - empty', () => {
  expect(Strings.isAlpha()()).toMatchSnapshot();
});

it('isAlpha - valid alpha', () => {
  expect(Strings.isAlpha()('John Doe')).toMatchSnapshot();
});

it('isAlpha - invalid alpha', () => {
  expect(Strings.isAlpha()('John Doe #@*&')).toMatchSnapshot();
});

it('isEmail - empty', () => {
  expect(Strings.isEmail()()).toMatchSnapshot();
});

it('isEmail - valid email', () => {
  expect(Strings.isEmail()('john@doe.com')).toMatchSnapshot();
});

it('isEmail - invalid email', () => {
  expect(Strings.isEmail()('fake@d.c.b')).toMatchSnapshot();
});

it('minLength - empty', () => {
  expect(Strings.minLength(10)()).toMatchSnapshot();
});

it('minLength - valid sentence', () => {
  expect(Strings.minLength(5)('12345')).toMatchSnapshot();
});

it('minLength - invalid sentence', () => {
  expect(Strings.minLength(5)('123')).toMatchSnapshot();
});

it('maxLength - empty', () => {
  expect(Strings.maxLength(10)()).toMatchSnapshot();
});

it('maxLength - valid sentence', () => {
  expect(Strings.maxLength(5)('12345')).toMatchSnapshot();
});

it('maxLength - invalid sentence', () => {
  expect(Strings.maxLength(5)('123456')).toMatchSnapshot();
});

it('minWords - empty', () => {
  expect(Strings.minWords(2)()).toMatchSnapshot();
});

it('minWords - valid sentence', () => {
  expect(Strings.minWords(2)('John Doe')).toMatchSnapshot();
});

it('minWords - invalid sentence', () => {
  expect(Strings.minWords(2)('John')).toMatchSnapshot();
});

it('maxWords - empty', () => {
  expect(Strings.maxWords(2)()).toMatchSnapshot();
});

it('maxWords - valid sentence', () => {
  expect(Strings.maxWords(2)('John Doe')).toMatchSnapshot();
});

it('maxWords - invalid sentence', () => {
  expect(Strings.maxWords(2)('Mr. John Doe')).toMatchSnapshot();
});
