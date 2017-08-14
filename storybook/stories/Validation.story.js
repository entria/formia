import React from 'react';
import { storiesOf } from '@kadira/storybook';

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
      if (errors) {
        return alert(JSON.stringify(errors));
      }

      return alert(JSON.stringify(values));
    }}
  >
    <Form.Input name="user" label="User" placeholder="user@email.com" />
    <Form.Input name="password" type="password" label="Password" />
    <Form.Submit />
    <Form.Reset />
  </Form>
);
