import { createContext } from 'react';

const ValidationContext = createContext({
  getErrorMessagesByFieldName: (something) => undefined,
  clearErrors: (something) => {},
  validate: (toValidate, onValid) => {
    onValid();
  },
  errors: {},
});

export default ValidationContext;
