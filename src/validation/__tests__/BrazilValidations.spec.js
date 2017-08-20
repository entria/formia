import * as Brazil from '../BrazilValidations';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('cpf - empty', () => {
  expect(Brazil.cpf()()).toMatchSnapshot();
});

it('cpf - valid document', () => {
  expect(Brazil.cpf()('15516405114')).toMatchSnapshot();
});

it('cpf - bunch of zeros', () => {
  expect(Brazil.cpf()('00000000000')).toMatchSnapshot();
});

it('cpf - invalid', () => {
  expect(Brazil.cpf()('12345678900')).toMatchSnapshot();
});

it('phone - empty', () => {
  expect(Brazil.phone()()).toMatchSnapshot();
});

it('phone - valid cellphone', () => {
  expect(Brazil.phone()('49991237830')).toMatchSnapshot();
});

it('phone - valid landline', () => {
  expect(Brazil.phone()('4936310000')).toMatchSnapshot();
});

it('phone - invalid cellphone', () => {
  expect(Brazil.phone()('49012345678')).toMatchSnapshot();
});

it('phone - invalid landline', () => {
  expect(Brazil.phone()('4901234566')).toMatchSnapshot();
});
