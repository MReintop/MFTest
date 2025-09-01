import React from 'react';

import ReduxProvider from '../../providers/StoreProvider';
import ProceedingPageDataLoader from './ProceedingPageDataLoader';
import ProceedingPageLayout from './ProceedingPageLayout';
import GlobalNotifications from '../../components/GlobalNotifications';

import 'PlansUI/moduleInitializer';

const ProceedingPage = () => {
  return (
    <ReduxProvider>
      <GlobalNotifications />

      <ProceedingPageDataLoader>
        <ProceedingPageLayout />
      </ProceedingPageDataLoader>
    </ReduxProvider>
  );
};

export default ProceedingPage;
