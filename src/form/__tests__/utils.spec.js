import { handleInitialValuesUpdate } from '../utils';

it('handleInitialValuesUpdate - default props', () => {
  expect(handleInitialValuesUpdate()).toMatchSnapshot();
});

it('handleInitialValuesUpdate - async loading', () => {
  const currentValues = {};
  const currentInitialValues = {};
  const newInitialValues = { name: 'Barney Stinson' };

  expect(
    handleInitialValuesUpdate(currentValues, currentInitialValues, newInitialValues),
  ).toMatchSnapshot();
});

it('handleInitialValuesUpdate - async update if field is pristine', () => {
  const currentValues = { name: 'Barney Stinson' };
  const currentInitialValues = { name: 'Barney Stinson' };
  const newInitialValues = { name: 'Barney Stinson Awesome' };

  expect(
    handleInitialValuesUpdate(currentValues, currentInitialValues, newInitialValues),
  ).toMatchSnapshot();
});

it('handleInitialValuesUpdate - async update if field is dirty', () => {
  const currentValues = { name: 'Legendary Barney Stinson' };
  const currentInitialValues = { name: 'Barney Stinson' };
  const newInitialValues = { name: 'Barney Stinson Awesome' };

  expect(
    handleInitialValuesUpdate(currentValues, currentInitialValues, newInitialValues),
  ).toMatchSnapshot();
});
