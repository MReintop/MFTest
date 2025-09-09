import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Tabs, Tab, Button } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../components/CustomTabPanel';
import PlanningTabContent from '../tabContents/PlanningTabContent';

import DocumentGeneralDataTabContent from '../tabContents/DocumentGeneralDataTabContent';
import useTabs from '../../hooks/useTabs';
import { applicationDtoSelector } from '../../store/documentSlice/documentSlice';
import { userCurrentRoleSelector } from '../../store/globalUiSlice/globalUiSlice';
import usePageTabPermissions from '../../permissions/permissionHooks/usePageTabPermissions';
import { tabTitles, TabType } from '../../permissions/permissionsConstants';
import DocumentPageFooter from '../../components/DocumentPageFooter';

const PlanningPageLayout = () => {
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
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tabType: TabType, index) => (
            <Tab label={tabTitles[tabType]} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={tabIndex} index={0}>
        <PlanningTabContent />
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={1}>
        <DocumentGeneralDataTabContent />
      </CustomTabPanel>

      <DocumentPageFooter />
    </>
  );
};

export default PlanningPageLayout;
