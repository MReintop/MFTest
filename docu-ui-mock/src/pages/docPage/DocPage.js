import React from 'react';

import ReduxProvider from '../../providers/StoreProvider';
import DocPageDataLoader from './DocPageDataLoader';
import DocPageLayout from './DocPageLayout';
import GlobalNotifications from '../../components/GlobalNotifications';

import 'PlansUI/moduleInitializer';

const DocPage = () => {
  // Can add slices asynchronously
  // useEffect(() => {
  // store.reducerManager.add('document', documentSlice.reducer);
  // }, []);

  return (
    // Document type lehtede otsustamine
    <ReduxProvider>
      <GlobalNotifications />

      <DocPageDataLoader>
        <DocPageLayout />
      </DocPageDataLoader>
    </ReduxProvider>
  );
};

export default DocPage;
