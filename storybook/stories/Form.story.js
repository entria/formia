import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Form } from '../common';

const stories = storiesOf('Form', module);

stories.add('default', () =>
  <Form onSubmit={action('Form onSubmit')}>
    <Form.Input name="user" label="User" placeholder="user@email.com" />
    <Form.Input name="password" type="password" label="Password" />
    <Form.Submit />
    <Form.Reset />
  </Form>
);

stories.add('onChange', () =>
  <Form onChange={action('Form onChange')}>
    <Form.Input name="text" label="Look at your console..." />
  </Form>
);
