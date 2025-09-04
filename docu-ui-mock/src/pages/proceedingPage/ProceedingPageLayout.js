import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Tabs, Tab, Button } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../components/CustomTabPanel';
import PlanningTabContent from '../tabContents/PlanningTabContent';

import DocumentGeneralDataTabContent from '../tabContents/DocumentGeneralDataTabContent';
import { EventBus, EventType } from '../../events/eventBus';
import { saveDocument } from '../../store/documentSlice/documentThunks';
import ProcedeedingGeneralDataTabContent from '../tabContents/ProceedingGeneralDataTabContent';

const ProceedingPageLayout = () => {
  const dispatch = useDispatch();

  const { tabIndex, setTabIndex } = useTabs();

  const saveDocumentModule = () => {
    dispatch(saveDocument());
  };

  const saveClicked = async () => {
    // Global event
    // Start listening to planning module. Perhaps this can be handled in backend?
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
          <Tab label="Menetluse üldinfo" {...a11yProps(0)} />
          <Tab label="Dokumendi üldinfo" {...a11yProps(1)} />
          <Tab label="Failid" {...a11yProps(2)} />
          <Tab label="Planeering" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabIndex} index={0}>
        <ProcedeedingGeneralDataTabContent />
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={1}>
        <DocumentGeneralDataTabContent />
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={2}>
        Siin failid
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={3}>
        <PlanningTabContent />
      </CustomTabPanel>

      {/* Save does not exist in proceeding page actually */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="outlined" onClick={() => saveClicked()}>
          Save
        </Button>
        <Button onClick={() => sendSomeSystemNotification()}>Submit</Button>
      </Box>
    </>
  );
};

export default ProceedingPageLayout;
