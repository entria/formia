import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Form } from '../common';

const stories = storiesOf('Form.Field', module);

stories.add('default', () =>
  <Form>
    <Form.Input
      name="text"
      label="Type something..."
      debug
    />
  </Form>
);

stories.add('onChange', () =>
  <Form>
    <Form.Input
      name="text"
      label="Look at your console..."
      onChange={values => console.log(values)}
      debug
    />
  </Form>
);
