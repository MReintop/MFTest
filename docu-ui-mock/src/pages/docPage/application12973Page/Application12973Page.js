import React from 'react';
import { useSelector } from 'react-redux';

import Application12973PageLayout from './Application12973PageLayout';
import Application12973PageDataLoader from './Application12973PageDataLoader';

import 'PlansUI/moduleInitializer';
import { userCurrentRoleSelector } from '../../../store/globalUiSlice/globalUiSlice';
import Application12973ValidationProvider from './validation/Application12973ValidationProvider';

const Application12973Page = () => {
  const userRole = useSelector(userCurrentRoleSelector);

  console.log('SIIN Application12973Page. User role : ', userRole);

  // Yup validation context
  // Permissions context (prev pageConfig)
  return (
    <Application12973PageDataLoader>
      {/* <Application12973PermissionsProvider> */}
      <Application12973ValidationProvider>
        <Application12973PageLayout />
      </Application12973ValidationProvider>
      {/* </Application12973PermissionsProvider> */}
    </Application12973PageDataLoader>
  );
};

export default Application12973Page;
