import { Button } from '@mui/material';
import React, { Suspense, useState } from 'react';

const PlanningGeneralDataSection = React.lazy(() =>
  import('PlansUI/PlanningGeneralDataSection'),
);

const PlanningAreaSection = React.lazy(() =>
  import('PlansUI/PlanningAreaSection'),
);

const PlanningTabContent = () => {
  const [permissions, setPermissions] = useState(['R']);

  const changePermissons = () => {
    console.log('SIIN', permissions.includes('R'));
    if (permissions.includes('R')) {
      setPermissions(['W']);
    } else if (permissions.includes('W')) {
      setPermissions(['R']);
    }
  };

  console.log('SIIN', permissions);

  return (
    <div>
      <Button onClick={() => changePermissons()}>Muuda õigusi</Button>

      <Suspense fallback={<>Laen andmeid ...</>}>
        <PlanningGeneralDataSection permissions={permissions} />
      </Suspense>

      <Suspense fallback={<>Laen andmeid ...</>}>
        <PlanningAreaSection permissions={permissions} />
      </Suspense>
    </div>
  );
};

export default PlanningTabContent;
