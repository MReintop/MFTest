import { createContext } from 'react';
import { YupValidation } from '../hooks/useYupValidation';

const ValidationContext = createContext<YupValidation>({
  getErrorMessagesByFieldName: (something) => undefined,
  clearErrors: (something) => {},
  validate: (toValidate, onValid) => {
    onValid();
  },
  getErrorMessagesWithIntlShape: () => ({}),
  errors: {},
  groupedErrors: {},
});

export default ValidationContext;
