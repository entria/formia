import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Validation } from '../../src';
import { Form, YES_OR_NO_OPTIONS } from '../common';

const stories = storiesOf('Validation', module);

stories.add('default', () =>
  <Form
    validations={{
      user: [Validation.required()],
      password: [Validation.required()],
    }}
    onSubmit={(values, errors) => {
      if (errors && Object.keys(errors).length > 0) {
        action('Validation errors')(errors);
        return;
      }

      return action('Validation success')(values);
    }}
  >
    <Form.Input name="user" label="User" placeholder="user@email.com" />
    <Form.Input name="password" type="password" label="Password" />
    <Form.Submit />
    <Form.Reset />
  </Form>
);

stories.add('strings', () =>
  <Form
    validations={{
      isAlpha: [Validation.Strings.isAlpha()],
      isEmail: [Validation.Strings.isEmail()],
      minLength: [Validation.Strings.minLength(10)],
      minWords: [Validation.Strings.minWords(3)],
    }}
  >
    <Form.Input name="isAlpha" label="Validation.Strings.isAlpha()" />
    <Form.Input name="isEmail" label="Validation.Strings.isEmail()" />
    <Form.Input name="minLength" label="Validation.Strings.minLength(10)" />
    <Form.Input name="minWords" label="Validation.Strings.minWords(3)" />
  </Form>
);

stories.add('dates', () =>
  <Form
    validations={{
      isValid: [Validation.Dates.isValid()],
      isFuture: [Validation.Dates.isFuture()],
      isPast: [Validation.Dates.isPast()],
      isBetween: [Validation.Dates.isBetween('2000-01-01', '2000-12-31')],
    }}
  >
    <Form.Input type="date" name="isValid" label="Validation.Dates.isValid()" />
    <Form.Input type="date" name="isFuture" label="Validation.Dates.isFuture()" />
    <Form.Input type="date" name="isPast" label="Validation.Dates.isPast()" />
    <Form.Input type="date" name="isBetween" label="Validation.Dates.isBetween('2000-01-01', '2000-12-31')" />
  </Form>
);

stories.add('booleans', () =>
  <Form
    validations={{
      isTrue: [Validation.Booleans.isTrue()],
      isFalse: [Validation.Booleans.isFalse()],
    }}
    initialValues={{
      isFalse: false,
    }}
  >
    <Form.Select name="isTrue" options={YES_OR_NO_OPTIONS} label="Validation.Booleans.isTrue()" />
    <Form.Select name="isFalse" options={YES_OR_NO_OPTIONS} label="Validation.Booleans.isFalse()" />
  </Form>
);

stories.add('brazil', () =>
  <Form
    validations={{
      cpf: [Validation.Brazil.cpf()],
      phone: [Validation.Brazil.phone()],
    }}
  >
    <Form.Input name="cpf" label="Validation.Brazil.cpf()" />
    <Form.Input name="phone" label="Validation.Brazil.phone()" />
  </Form>
);
