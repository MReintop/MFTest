import { Button } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { applicationDtoSelector } from '../../store/documentSlice/documentSlice';
import { userCurrentRoleSelector } from '../../store/globalUiSlice/globalUiSlice';
import usePageSectionPermissions from '../../permissions/permissionHooks/usePageSectionPermissions';
import { PageSection } from '../../permissions/permissionsConstants';

const PlanningGeneralDataSection = React.lazy(
  // @ts-ignore
  () => import('PlansUI/PlanningGeneralDataSection'),
);

const PlanningAreaSection = React.lazy(
  // @ts-ignore
  () => import('PlansUI/PlanningAreaSection'),
);

const PlanningTabContent = () => {
  const applicationDto = useSelector(applicationDtoSelector);
  const userRole = useSelector(userCurrentRoleSelector);

  const generalDataPermissions = usePageSectionPermissions({
    sectionName: PageSection.PlanningGeneralDataSection,
    userRole,
    documentState: applicationDto.state,
  });

  const areaPermissions = usePageSectionPermissions({
    sectionName: PageSection.PlanningAreaSection,
    userRole,
    documentState: applicationDto.state,
  });

  return (
    <div>
      {generalDataPermissions.read && (
        <Suspense fallback={<>Laen andmeid ...</>}>
          <PlanningGeneralDataSection permissions={generalDataPermissions} />
        </Suspense>
      )}

      {areaPermissions.read && (
        <Suspense fallback={<>Laen andmeid ...</>}>
          <PlanningAreaSection permissions={areaPermissions} />
        </Suspense>
      )}
    </div>
  );
};

export default PlanningTabContent;
