import React from 'react';

import 'PlansUI/moduleInitializer';
import Permit12976PageLayout from './Permit12976PageLayout';
import Permit12976PageDataLoader from './Permit12976PageDataLoader';
import ValidationProvider from '../../../providers/ValidationProvider';
import Permit12976ValidationSchema from './validation/Permit12976ValidationSchema';
import PagePermissionsProvider from '../../../providers/PagePermissionsProvider';
import permit12976PermissionsCofig from './permissions/permit12976Permissions';

const Permit12976Page = () => {
  return (
    <PagePermissionsProvider pageViewConfig={permit12976PermissionsCofig}>
      <Permit12976PageDataLoader>
        <ValidationProvider schema={Permit12976ValidationSchema}>
          <Permit12976PageLayout />
        </ValidationProvider>
      </Permit12976PageDataLoader>
    </PagePermissionsProvider>
  );
};

export default Permit12976Page;
