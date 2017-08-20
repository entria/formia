import get from 'lodash.get';
import set from 'lodash.set';
import isEqual from 'lodash.isequal';

export const handleInitialValuesUpdate = (
  currentValues = {},
  currentInitialValues = {},
  newInitialValues = {},
) => {
  const updatedValues = { ...currentValues };

  Object.keys(newInitialValues).map(fieldName => {
    const fieldCurrentValue = get(currentValues, fieldName, null);
    const fieldCurrentInitialValue = get(currentInitialValues, fieldName, null);
    const isFieldPristine = isEqual(fieldCurrentValue, fieldCurrentInitialValue);

    if (!isFieldPristine) {
      return;
    }

    const fieldNewInitialValue = get(newInitialValues, fieldName, null);
    set(updatedValues, fieldName, fieldNewInitialValue);
  });

  return updatedValues;
};
