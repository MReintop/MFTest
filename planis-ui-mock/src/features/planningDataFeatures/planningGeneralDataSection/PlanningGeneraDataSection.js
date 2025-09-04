import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  CircularProgress,
} from '@mui/material';
import { ArrowCircleDown } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReduxProvider from '../../../store/ReduxProvider';
import { store } from '../../../store';

import planningGeneralDataReducer, {
  planningDataLoadingSelector,
  planningDataSelector,
  PlanningGeneralDataSliceKey,
  planningSliceMountedSelector,
} from './slice/planningGeneralDataSlice';

import {
  fetchPlanningData,
  fetchPlanningDataByDocNr,
} from './thunks/planningGeneralDataThunks';
import PlanningDetailsForm from './components/PlanningDetailsForm';

const PlanningGeneralDataSection = ({ permissions }) => {
  // docnr järgi! või planningId järgi.
  const { planningId, docNr, docType } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(planningDataLoadingSelector);
  const isStoreMounted = useSelector(planningSliceMountedSelector);
  const planningData = useSelector(planningDataSelector);

  useEffect(() => {
    // Should we start listening here instead. Why would we listen if there is nothing to save in store?
    // startListeningToEvents();

    store.reducerManager.add(
      PlanningGeneralDataSliceKey,
      planningGeneralDataReducer,
    );
  }, []);

  const fetchData = () => {
    if (docNr && docType && planningData?.docNr !== `${docType}/${docNr}`) {
      dispatch(fetchPlanningDataByDocNr(`${docType}/${docNr}`));
    } else if (
      planningId &&
      planningData?.planningId?.toString() !== planningId
    ) {
      dispatch(fetchPlanningData(planningId));
    }
  };

  useEffect(() => {
    fetchData();
  }, [isStoreMounted, planningData?.planningId]);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<ArrowCircleDown />}
      >
        <Typography component="span">Üldinfo</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!isStoreMounted || isLoading ? (
          <Box sx={{ display: 'flex', width: '100%' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PlanningDetailsForm isEditable={permissions?.includes('W')} />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

// Wrap in redux context
const PlanningGeneralDataSectionWithStore = (props) => {
  return (
    <ReduxProvider>
      <PlanningGeneralDataSection {...props} />
    </ReduxProvider>
  );
};

export default PlanningGeneralDataSectionWithStore;
