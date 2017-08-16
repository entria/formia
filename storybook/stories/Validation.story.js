import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Validation } from '../../src';
import { Form } from '../common';

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
