import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tabs, Tab, Button } from '@mui/material';

import { a11yProps, CustomTabPanel } from '../../../components/CustomTabPanel';
import { saveDocument } from '../../../store/documentSlice/documentThunks';
import { EventBus, EventType } from '../../../events/eventBus';
import DocumentGeneralDataTabContent from '../../tabContents/DocumentGeneralDataTabContent';
import PlanningTabContent from '../../tabContents/PlanningTabContent';
import { applicationDtoSelector } from '../../../store/documentSlice/documentSlice';
import ValidationContext from '../../../contexts/ValidationContext';
import useTabs from '../../../hooks/useTabs';

const Permit12976PageLayout = () => {
  const dispatch = useDispatch();
  const applicationDto = useSelector(applicationDtoSelector);

  const { validate } = useContext(ValidationContext);

  const { tabIndex, setTabIndex } = useTabs();

  const saveDocumentModule = () => {
    dispatch(saveDocument());
  };

  const saveClicked = async () => {
    validate(applicationDto, () => {
      // Global event
      // Listen to planning module saved once. Perhaps this can be handled in backend?
      EventBus.once(EventType.PlanningModuleSaved, saveDocumentModule);

      EventBus.emit(EventType.Save);
    });
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
          <Tab label="Üldinfo" {...a11yProps(0)} />
          <Tab label="Failid" {...a11yProps(1)} />
          <Tab label="Planeering" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabIndex} index={0}>
        <DocumentGeneralDataTabContent />
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={1}>
        Siin dokumendi failid
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={2}>
        <PlanningTabContent />
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

export default Permit12976PageLayout;
