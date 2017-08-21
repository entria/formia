// @flow
import { Strings } from '@entria/utils';

import type { RuleError } from './Validation';

export const cpf = () => {
  const validateFirstDigit = (value: any): boolean => {
    let Soma = 0;
    for (let i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(value.substring(i - 1, i), 10) * (11 - i);
    }

    let Resto = Soma * 10 % 11;
    if (Resto === 10 || Resto === 11) {
      Resto = 0;
    }

    return Resto === parseInt(value.substring(9, 10), 10);
  };

  const validateSecondDigit = (value: any): boolean => {
    let Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(value.substring(i - 1, i), 10) * (12 - i);
    }

    let Resto = Soma * 10 % 11;
    if (Resto === 10 || Resto === 11) {
      Resto = 0;
    }

    return Resto === parseInt(value.substring(10, 11), 10);
  };

  return (value: any): ?RuleError => {
    if (Strings.isEmpty(value)) {
      return null;
    }

    const sanitizedValue = Strings.numbers(value);
    if (sanitizedValue === '00000000000') {
      return {
        code: 'Validation.Brazil.cpf',
        message: 'Invalid CPF',
        params: [],
      };
    }

    const isFirstDigitValid = validateFirstDigit(sanitizedValue);
    const isSecondDigitValid = validateSecondDigit(sanitizedValue);
    const isValid = isFirstDigitValid && isSecondDigitValid;
    if (isValid) {
      return null;
    }

    return {
      code: 'Validation.Brazil.cpf',
      message: 'Invalid CPF',
      params: [],
    };
  };
};

export const phone = () => (value: any): ?RuleError => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const sanitizedValue = Strings.numbers(value);
  const thirdNumber = sanitizedValue.substr(2, 1);

  const validCellphone = sanitizedValue.length === 11 ? thirdNumber === '9' : true;
  const validLandline = sanitizedValue.length === 10 ? thirdNumber !== '0' : true;
  const isValid = validCellphone && validLandline;
  if (isValid) {
    return null;
  }

  return {
    code: 'Validation.Brazil.phone',
    message: 'Invalid phone number',
    params: [],
  };
};
