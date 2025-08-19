import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import { Box, Tabs, Tab, Button } from '@mui/material';
import PlanningTabContent from './tabContents/PlanningTabContent';
import { a11yProps, CustomTabPanel } from '../components/CustomTabPanel';
import usePlanningModule from '../hooks/usePlanningModule';

const DocPage = () => {
  const store = useStore();

  const [tabIndex, setTabIndex] = React.useState(0);

  const { savePlanningModule, umnountPlanningModule } = usePlanningModule();

  useEffect(() => {
    // TODO : Kas me tahaks siin planise mooduli käima tõmmata ?

    // TODO : Globaalsed evendid alternatiiv
    // Kas backend saab hoopis valideerida, et planis on salvestunud?
    // Checki aktiivseid network requeste

    // KUIDAS NOTIFICATIONID
    return () => {
      umnountPlanningModule();
    };
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const saveDocument = async () => {
    const successful = await savePlanningModule();
    if (successful) {
      console.log('SIIN save successful parentis');
    }

    console.log('SIIN docpages peale savemist');
  };

  console.log('SIIN store', store.getState());
  return (
    <PageWrapper title="Document">
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

        <Button variant="outlined" onClick={() => saveDocument()}>
          Save
        </Button>
        <Button>Submit</Button>
      </Box>
    </PageWrapper>
  );
};

export default DocPage;
