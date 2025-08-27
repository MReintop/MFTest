import React, { useEffect } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { Box, Tabs, Tab, Button, SnackbarContent, Stack } from '@mui/material';
import PlanningTabContent from './tabContents/PlanningTabContent';
import { a11yProps, CustomTabPanel } from '../components/CustomTabPanel';
import usePlanningModule from '../hooks/usePlanningModule';
import {
  startListeningDocPageEvents,
  stopListeningDocPageEvents,
} from '../events/documentModuleEvents';
import {
  notificationsSelector,
  setNotifications,
  documentSlice,
} from '../store/documentSlice';
import { EventBus, EventType } from '../events/eventBus';
import { saveDocument } from '../store/documentThunks';
import ReduxProvider from '../providers/StoreProvider';

const DocPage = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = React.useState(0);
  const [localNotifications, setLocalNotifications] = React.useState([]);

  // Store context ainult komponentidel
  const {
    planningModuleStartListeningEvents,
    umnountPlanningModule,
    savePlanningModule,
  } = usePlanningModule();

  const notifications = useSelector(notificationsSelector);

  useEffect(() => {
    startListeningDocPageEvents();
    // Kas see vajalik, kui meil pole seal midagi muudetud

    // store.reducerManager.add('document', documentSlice.reducer);

    planningModuleStartListeningEvents();
    return () => {
      // imported functions
      // umnountPlanningModule();

      // globalEvents
      EventBus.emit(EventType.Unmount);
      stopListeningDocPageEvents();
    };
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const saveClicked = async () => {
    console.log('SIIN save clicked');
    // Global event
    EventBus.emit(EventType.Save);

    EventBus.on(EventType.PlanningModuleSaved, () => {
      dispatch(saveDocument());
      console.log('SIIN docpages peale savemist');
    });

    // Imported fn
    // await savePlanningModule();
  };

  const removeNotifications = () => {
    dispatch(setNotifications([]));
    setLocalNotifications([]);
  };

  useEffect(() => {
    if (notifications.length) {
      setLocalNotifications(notifications);
    }
  }, [notifications]);

  const Notification = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={removeNotifications}>
        UNDO
      </Button>
    </React.Fragment>
  );

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Üldinfo" {...a11yProps(0)} />
          <Tab label="Dokumendid" {...a11yProps(1)} />
          <Tab label="Planeering" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabIndex} index={0}>
        Siia dokumendi andmestik
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        Siin dokumendi failid
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={2}>
        <PlanningTabContent />
      </CustomTabPanel>
      {/*  BUTTONS */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {/* Parent kontrollib, et save on välja kutsutud enne submiti */}

        <Button variant="outlined" onClick={() => saveClicked()}>
          Save
        </Button>
        <Button>Submit</Button>
      </Box>

      {!!localNotifications.length && (
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          {localNotifications.map((notification) => (
            <SnackbarContent
              open={open}
              autoHideDuration={6000}
              onClose={removeNotifications}
              message={notification}
              action={Notification}
            />
          ))}
        </Stack>
      )}
    </>
  );
};

export default DocPage;
