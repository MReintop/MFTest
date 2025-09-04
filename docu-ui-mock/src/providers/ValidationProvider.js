import React from 'react';
import { useYupValidation } from '../hooks/useYupValidation';
import ValidationContext from '../contexts/ValidationContext';

const ValidationProvider = ({ schema, children }) => {
  const pageValidation = useYupValidation(schema);

  return (
    <ValidationContext.Provider value={pageValidation}>
      {children}
    </ValidationContext.Provider>
  );
};

export default ValidationProvider;
