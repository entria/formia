import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Form } from '../common';

const stories = storiesOf('Form', module);

stories.add('default', () =>
  <Form onSubmit={values => alert(JSON.stringify(values))}>
    <Form.Input name="user" label="User" placeholder="user@email.com" />
    <Form.Input name="password" type="password" label="Password" />
    <Form.Submit />
  </Form>
);

stories.add('onChange', () =>
  <Form onChange={values => console.log(values)}>
    <Form.Input name="text" label="Look at your console..." />
  </Form>
);
