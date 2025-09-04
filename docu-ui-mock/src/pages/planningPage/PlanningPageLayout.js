import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Tabs, Tab, Button } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../components/CustomTabPanel';
import PlanningTabContent from '../tabContents/PlanningTabContent';

import DocumentGeneralDataTabContent from '../tabContents/DocumentGeneralDataTabContent';
import { EventBus, EventType } from '../../events/eventBus';
import { saveDocument } from '../../store/documentSlice/documentThunks';
import useTabs from '../../hooks/useTabs';

const PlanningPageLayout = () => {
  const dispatch = useDispatch();

  const { tabIndex, setTabIndex } = useTabs();

  const saveDocumentModule = () => {
    dispatch(saveDocument());
  };

  const saveClicked = async () => {
    // Global event
    // Listen to planning module saved once. Perhaps this can be handled in backend?
    EventBus.once(EventType.PlanningModuleSaved, saveDocumentModule);

    EventBus.emit(EventType.Save);
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const sendSomeSystemNotification = () => {
    EventBus.emit(EventType.SystemNotification, {
      message: 'Some system notification here!',
    });
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Planeering" {...a11yProps(0)} />
          <Tab label="Dokumendi üldinfo" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabIndex} index={0}>
        <PlanningTabContent />
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={1}>
        <DocumentGeneralDataTabContent />
      </CustomTabPanel>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="outlined" onClick={() => saveClicked()}>
          Save
        </Button>
        <Button onClick={() => sendSomeSystemNotification()}>Submit</Button>
      </Box>
    </>
  );
};

export default PlanningPageLayout;
