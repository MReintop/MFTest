import { uniq } from 'lodash';
import { useState } from 'react';
import * as yup from 'yup';
import {
  deleteFieldAndChildrenErrors,
  getParentAndChildErrorKeys,
  mapGroupedValidationErrors,
  mapValidationErrors,
} from './yupValidationHelpers';
import { EventBus, EventType } from '../events/eventBus';

export interface YupValidation {
  validate: (data: any, onValid: any, context?: any) => void;
  getErrorMessagesByFieldName: (
    fieldNames: string | string[],
  ) => string | undefined;
  clearErrors: (fieldKey?: string) => void;
  errors: { [key: string]: string };
  getErrorMessagesWithIntlShape: () => { [key: string]: string };
  groupedErrors: { [key: string]: string[] };
}

export const useYupValidation = (schema): YupValidation => {
  const [errors, setErrors] = useState({});
  const [groupedErrors, setGroupedErrors] = useState({});

  const validate = (data, onValid, context, errorsGrouped = false) => {
    EventBus.emit(EventType.Validate);
    return schema.validate(data, { abortEarly: false, context }).then(
      () => {
        setErrors({});
        onValid(data);
      },
      (err: yup.ValidationError) => {
        if (errorsGrouped) {
          setGroupedErrors(mapGroupedValidationErrors(err));
        } else {
          setErrors(mapValidationErrors(err));
        }
      },
    );
  };

  const getErrorMessagesByFieldName = (fieldNames) => {
    let errorKeys: string[] = [];

    if (Array.isArray(fieldNames)) {
      errorKeys = fieldNames
        .map((item) => getParentAndChildErrorKeys(errors, item))
        .flatMap((item) => item);
    } else {
      errorKeys = getParentAndChildErrorKeys(errors, fieldNames);
    }

    const formattedMessages: string[] = [];
    for (const field of errorKeys) {
      errors[field] && formattedMessages.push(errors[field]);
    }

    return formattedMessages.length > 0
      ? uniq(formattedMessages).join(', ')
      : undefined;
  };

  const clearErrors = (fieldKey: string | undefined): void => {
    if (!fieldKey) {
      setErrors({});
      setGroupedErrors({});
    } else {
      setErrors((prevErrors) =>
        deleteFieldAndChildrenErrors(prevErrors, fieldKey),
      );
    }
  };

  const getErrorMessagesWithIntlShape = () => {
    return Object.keys(errors).reduce((acc, key) => {
      acc[key] = Array.from(new Set([errors[key]])).join(', ');
      return acc;
    }, {} as { [key: string]: string });
  };

  return {
    validate,
    getErrorMessagesByFieldName,
    clearErrors,
    errors,
    getErrorMessagesWithIntlShape,
    groupedErrors,
  };
};
