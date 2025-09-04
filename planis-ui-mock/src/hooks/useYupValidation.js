import { uniq } from 'lodash';
import { useEffect, useState } from 'react';
import {
  deleteFieldAndChildrenErrors,
  getParentAndChildErrorKeys,
  mapGroupedValidationErrors,
  mapValidationErrors,
} from './yupValidationHelpers';

export const useYupValidation = (schema, prevErrors) => {
  const [errors, setErrors] = useState({});
  const [groupedErrors, setGroupedErrors] = useState({});

  useEffect(() => {
    if (prevErrors) {
      setErrors(prevErrors);
    }
  }, [prevErrors]);

  const validate = (data, onValid, context, errorsGrouped = false) => {
    return schema.validate(data, { abortEarly: false, context }).then(
      () => {
        setErrors({});
        onValid(data);
      },
      (err) => {
        if (errorsGrouped) {
          setGroupedErrors(mapGroupedValidationErrors(err));
        } else {
          setErrors(mapValidationErrors(err));
        }
      },
    );
  };

  const getErrorMessagesByFieldName = (fieldNames) => {
    let errorKeys = [];

    if (Array.isArray(fieldNames)) {
      errorKeys = fieldNames
        .map((item) => getParentAndChildErrorKeys(errors, item))
        .flatMap((item) => item);
    } else {
      errorKeys = getParentAndChildErrorKeys(errors, fieldNames);
    }

    const formattedMessages = [];
    for (const field of errorKeys) {
      errors[field] && formattedMessages.push(errors[field]);
    }

    return formattedMessages.length > 0
      ? uniq(formattedMessages).join(', ')
      : undefined;
  };

  const clearErrors = (fieldKey) => {
    if (!fieldKey) {
      setErrors({});
      setGroupedErrors({});
    } else {
      setErrors((prevErrors) =>
        deleteFieldAndChildrenErrors(prevErrors, fieldKey),
      );
    }
  };

  return {
    validate,
    getErrorMessagesByFieldName,
    clearErrors,
    errors,
    groupedErrors,
  };
};
