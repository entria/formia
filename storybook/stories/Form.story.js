import React, { Component } from 'react';
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
    <Form.Input name="text" label="Type something..." />
  </Form>
);

class FormWithState extends Component {
  state = {
    initialValues: {
      user: 'user@email.com',
    },
  };

  changeInitialvalues = () => {
    const initialValues = {
      user: 'anotheruser@email.com',
    };

    this.setState(
      { initialValues },
      () => action('initialValues changed')(initialValues)
    );
  }

  render() {
    return (
      <Form initialValues={this.state.initialValues}>
        <Form.Input name="user" label="User" placeholder="user@email.com" />
        <Form.Button onClick={this.changeInitialvalues}>Change initial values</Form.Button>
        <Form.Reset />
      </Form>
    );
  }
}
stories.add('initialValues', () => <FormWithState />);
