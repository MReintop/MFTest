import React from 'react';

import Application12973PageLayout from './Application12973PageLayout';
import Application12973PageDataLoader from './Application12973PageDataLoader';

import Application12973ValidationProvider from './validation/Application12973ValidationProvider';
import PagePermissionsProvider from '../../../providers/PagePermissionsProvider';
import application12973PermissionsCofig from './permissions/application12973Permissions';

import 'PlansUI/moduleInitializer';

const Application12973Page = () => {
  return (
    <PagePermissionsProvider pageViewConfig={application12973PermissionsCofig}>
      <Application12973PageDataLoader>
        <Application12973ValidationProvider>
          <Application12973PageLayout />
        </Application12973ValidationProvider>
      </Application12973PageDataLoader>
    </PagePermissionsProvider>
  );
};

export default Application12973Page;
