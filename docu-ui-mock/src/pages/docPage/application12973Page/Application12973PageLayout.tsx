import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Tabs, Tab } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../../components/CustomTabPanel';

import DocumentGeneralDataTabContent from '../../tabContents/DocumentGeneralDataTabContent';
import PlanningTabContent from '../../tabContents/PlanningTabContent';
import { applicationDtoSelector } from '../../../store/documentSlice/documentSlice';
import useTabs from '../../../hooks/useTabs';
import { userCurrentRoleSelector } from '../../../store/globalUiSlice/globalUiSlice';
import { tabTitles, TabType } from '../../../permissions/permissionsConstants';
import DocumentPageFooter from '../../../components/DocumentPageFooter';
import usePageTabPermissions from '../../../permissions/permissionHooks/usePageTabPermissions';

const Application12973PageLayout = () => {
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
          {tabType === TabType.GeneralData && <DocumentGeneralDataTabContent />}

          {tabType === TabType.Files && <>Failid</>}

          {tabType === TabType.Planning && <PlanningTabContent />}
        </CustomTabPanel>
      ))}

      <DocumentPageFooter />
    </>
  );
};

export default Application12973PageLayout;
