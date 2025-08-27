import React from 'react';
import { useStore } from 'react-redux';

import PageWrapper from '../components/PageWrapper';
import { Box, Tabs, Tab } from '@mui/material';
import PlanningTabContent from './tabContents/PlanningTabContent';
import { a11yProps, CustomTabPanel } from '../components/CustomTabPanel';
import ReduxProvider from '../providers/StoreProvider';

const ProceedingPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Siin menetluse leht
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Menetluse üldinfo" {...a11yProps(0)} />
          <Tab label="Toimingud" {...a11yProps(1)} />
          <Tab label="Planeering" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabIndex} index={0}>
        Siia menetluse andmestik
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        Siin toimingute andmestik
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={2}>
        <PlanningTabContent />
      </CustomTabPanel>
      {/*  BUTTONS */}
    </>
  );
};

export default ProceedingPage;
