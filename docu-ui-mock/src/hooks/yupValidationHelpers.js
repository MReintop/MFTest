export const mapValidationErrors = (yupError) => {
  let errors = {};
  yupError.inner?.forEach((valErr, index) => {
    errors[valErr.path] = yupError.errors[index];
  });
  return errors;
};

export const mapGroupedValidationErrors = (yupError) => {
  let errors = {};

  yupError.inner?.forEach((valErr, index) => {
    if (errors[valErr.path]) {
      errors[valErr.path].push(yupError.errors[index]);
    } else {
      errors[valErr.path] = [yupError.errors[index]];
    }
  });

  return errors;
};

export const getParentAndChildErrorKeys = (errors, parentField) => {
  return Object.keys(errors).filter(
    (key) =>
      key === parentField ||
      (key.includes('.') && key.split('.')[0] === parentField),
  );
};

export const deleteFieldAndChildrenErrors = (errors, fieldName) => {
  let newErrors = { ...errors };

  const errorsToDelete = getParentAndChildErrorKeys(errors, fieldName);

  for (const errorKey of errorsToDelete) {
    delete newErrors[errorKey];
  }
  return newErrors;
};
