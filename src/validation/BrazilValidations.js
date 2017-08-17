import { Strings } from '@entria/utils';

export const cpf = (message = 'Invalid CPF') => {
  const validateFirstDigit = value => {
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

  const validateSecondDigit = value => {
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

  return value => {
    if (Strings.isEmpty(value)) {
      return null;
    }

    const sanitizedValue = Strings.numbers(value);
    if (sanitizedValue === '00000000000') {
      return message;
    }

    const isFirstDigitValid = validateFirstDigit(sanitizedValue);
    const isSecondDigitValid = validateSecondDigit(sanitizedValue);
    const isValid = isFirstDigitValid && isSecondDigitValid;

    return isValid ? null : message;
  };
};

export const phone = (message = 'Invalid phone number') => value => {
  if (Strings.isEmpty(value)) {
    return null;
  }

  const sanitizedValue = Strings.numbers(value);
  const thirdNumber = sanitizedValue.substr(2, 1);

  const validCellphone = sanitizedValue.length === 11 ? thirdNumber === '9' : true;
  const validLandline = sanitizedValue.length === 10 ? thirdNumber !== '0' : true;
  const isValid = validCellphone && validLandline;

  return isValid ? null : message;
};
