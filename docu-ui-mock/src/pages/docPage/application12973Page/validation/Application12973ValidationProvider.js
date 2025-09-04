import React from 'react';
import ValidationContext from '../../../../contexts/ValidationContext';
import { useYupValidation } from '../../../../hooks/useYupValidation';
import Application12973ValidationSchema from './Application12973ValidationSchema';

const Application12973ValidationProvider = ({ children }) => {
  const pageValidation = useYupValidation(Application12973ValidationSchema);
  return (
    <ValidationContext.Provider value={pageValidation}>
      {children}
    </ValidationContext.Provider>
  );
};

export default Application12973ValidationProvider;
