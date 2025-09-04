import React from 'react';

import 'PlansUI/moduleInitializer';
import Permit12976PageLayout from './Permit12976PageLayout';
import Permit12976PageDataLoader from './Permit12976PageDataLoader';
import { useSelector } from 'react-redux';
import { userCurrentRoleSelector } from '../../../store/globalUiSlice/globalUiSlice';
import ValidationProvider from '../../../providers/ValidationProvider';
import Permit12976ValidationSchema from './validation/Permit12976ValidationSchema';

const Permit12976Page = () => {
  const userRole = useSelector(userCurrentRoleSelector);

  console.log('SIIN Permit12976Page. User role : ', userRole);
  return (
    <Permit12976PageDataLoader>
      <ValidationProvider schema={Permit12976ValidationSchema}>
        <Permit12976PageLayout />
      </ValidationProvider>
    </Permit12976PageDataLoader>
  );
};

export default Permit12976Page;
