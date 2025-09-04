import React from 'react';

import ReduxProvider from '../../providers/StoreProvider';
import GlobalNotifications from '../../components/GlobalNotifications';

import 'PlansUI/moduleInitializer';
import PlanningPageLayout from './PlanningPageLayout';
import PlanningPageDataLoader from './PlanningPageDataLoader';

const PlanningPage = () => {
  // Can add slices asynchronously
  // useEffect(() => {
  // store.reducerManager.add('document', documentSlice.reducer);
  // }, []);

  return (
    // Document type lehtede otsustamine
    <ReduxProvider>
      <GlobalNotifications />

      <PlanningPageDataLoader>
        <PlanningPageLayout />
      </PlanningPageDataLoader>
    </ReduxProvider>
  );
};

export default PlanningPage;
