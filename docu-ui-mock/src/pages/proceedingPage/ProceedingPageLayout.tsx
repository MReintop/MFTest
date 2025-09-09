import React, { use } from 'react';
import { useSelector } from 'react-redux';
import { Box, Tabs, Tab } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../components/CustomTabPanel';
import PlanningTabContent from '../tabContents/PlanningTabContent';

import DocumentGeneralDataTabContent from '../tabContents/DocumentGeneralDataTabContent';
import ProcedeedingGeneralDataTabContent from '../tabContents/ProceedingGeneralDataTabContent';
import { applicationDtoSelector } from '../../store/documentSlice/documentSlice';
import { userCurrentRoleSelector } from '../../store/globalUiSlice/globalUiSlice';
import usePageTabPermissions from '../../permissions/permissionHooks/usePageTabPermissions';
import useTabs from '../../hooks/useTabs';
import { tabTitles, TabType } from '../../permissions/permissionsConstants';
import DocumentPageFooter from '../../components/DocumentPageFooter';

const ProceedingPageLayout = () => {
  const applicationDto = useSelector(applicationDtoSelector);
  const userRole = useSelector(userCurrentRoleSelector);

  const tabs = usePageTabPermissions({
    documentState: applicationDto.state,
    userRole,
  });

  const { tabIndex, setTabIndex } = useTabs();

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange}>
          {tabs.map((tabType: TabType, index) => (
            <Tab label={tabTitles[tabType]} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tabType, index) => (
        <CustomTabPanel value={tabIndex} index={index}>
          {tabType === TabType.ProceedingGeneralData && (
            <ProcedeedingGeneralDataTabContent />
          )}

          {tabType === TabType.GeneralData && <DocumentGeneralDataTabContent />}

          {tabType === TabType.Files && <>Failid</>}

          {tabType === TabType.Planning && <PlanningTabContent />}
        </CustomTabPanel>
      ))}

      <DocumentPageFooter />
    </>
  );
};

export default ProceedingPageLayout;
