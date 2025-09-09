import React, { useEffect } from 'react';

import ReduxProvider from '../../providers/StoreProvider';
import GlobalNotifications from '../../components/GlobalNotifications';

import 'PlansUI/moduleInitializer';
import PlanningPageLayout from './PlanningPageLayout';
import PlanningPageDataLoader from './PlanningPageDataLoader';
import PagePermissionsProvider from '../../providers/PagePermissionsProvider';
import { useDispatch } from 'react-redux';
import { setCurrentRole } from '../../store/globalUiSlice/globalUiSlice';
import planningPermissionsCofig from './permissions/planningPermissions';

const PlanningPage = ({ currentRole }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentRole(currentRole));
  }, [currentRole]);

  return (
    <PagePermissionsProvider pageViewConfig={planningPermissionsCofig}>
      <GlobalNotifications />
      <PlanningPageDataLoader>
        <PlanningPageLayout />
      </PlanningPageDataLoader>
    </PagePermissionsProvider>
  );
};

const PlanningPageWithContext = (props) => {
  return (
    <ReduxProvider>
      <PlanningPage {...props} />
    </ReduxProvider>
  );
};

export default PlanningPageWithContext;
