import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ReduxProvider from '../../providers/StoreProvider';
import ProceedingPageDataLoader from './ProceedingPageDataLoader';
import ProceedingPageLayout from './ProceedingPageLayout';
import GlobalNotifications from '../../components/GlobalNotifications';

import PagePermissionsProvider from '../../providers/PagePermissionsProvider';
import proceedingPermissionsCofig from './permissions/proceedingPermissions';

import 'PlansUI/moduleInitializer';
import { setCurrentRole } from '../../store/globalUiSlice/globalUiSlice';

const ProceedingPage = ({ currentRole }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentRole(currentRole));
  }, [currentRole]);

  return (
    <PagePermissionsProvider pageViewConfig={proceedingPermissionsCofig}>
      <GlobalNotifications />

      <ProceedingPageDataLoader>
        <ProceedingPageLayout />
      </ProceedingPageDataLoader>
    </PagePermissionsProvider>
  );
};

const ProceedingPageWithContext = (props) => {
  return (
    <ReduxProvider>
      <ProceedingPage {...props} />
    </ReduxProvider>
  );
};

export default ProceedingPageWithContext;
