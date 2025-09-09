import React from 'react';
import PagePermissionsContext from '../contexts/PagePermissionsContext';

const PagePermissionsProvider = ({ pageViewConfig, children }) => {
  return (
    <PagePermissionsContext.Provider value={pageViewConfig}>
      {children}
    </PagePermissionsContext.Provider>
  );
};

export default PagePermissionsProvider;
