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
      isAlpha: [Validation.String.isAlpha()],
      isEmail: [Validation.String.isEmail()],
      minLength: [Validation.String.minLength(10)],
      minWords: [Validation.String.minWords(3)],
    }}
  >
    <Form.Input name="isAlpha" label="Validation.String.isAlpha()" />
    <Form.Input name="isEmail" label="Validation.String.isEmail()" />
    <Form.Input name="minLength" label="Validation.String.minLength(10)" />
    <Form.Input name="minWords" label="Validation.String.minWords(3)" />
  </Form>
);

stories.add('booleans', () =>
  <Form
    validations={{
      isTrue: [Validation.Boolean.isTrue()],
      isFalse: [Validation.Boolean.isFalse()],
    }}
    initialValues={{
      isFalse: false,
    }}
  >
    <Form.Select name="isTrue" options={YES_OR_NO_OPTIONS} label="Validation.Boolean.isTrue()" />
    <Form.Select name="isFalse" options={YES_OR_NO_OPTIONS} label="Validation.Boolean.isFalse()" />
  </Form>
);
