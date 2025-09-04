import { createContext } from 'react';

const ValidationContext = createContext({
  getErrorMessagesByFieldName: () => undefined,
  clearErrors: () => {},
  errors: {},
});

export default ValidationContext;
