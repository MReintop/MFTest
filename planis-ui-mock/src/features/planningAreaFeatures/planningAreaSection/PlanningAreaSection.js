import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  CircularProgress,
} from '@mui/material';
import { ArrowCircleUp } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReduxProvider from '../../../store/ReduxProvider';
import { store } from '../../../store';

import PlanningAreaForm from './components/PlanningAreaForm';
import planningAreaSliceReducer, {
  planningAreaIdSelector,
  planningAreaLoadingSelector,
  PlanningAreaSliceKey,
  planningAreaSliceMountedSelector,
} from './slice/planningAreaSlice';
import {
  fetchPlanningAreaData,
  fetchPlanningAreaDataByDocNr,
} from './thunks/planningAreaThunks';

const PlanningAreaSection = ({ permissions }) => {
  const { planningId, docNr, docType } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(planningAreaLoadingSelector);
  const isStoreMounted = useSelector(planningAreaSliceMountedSelector);
  const planningIdFromStore = useSelector(planningAreaIdSelector);

  useEffect(() => {
    // Should we start listening here instead. Why would we listen if there is nothing to save in store?
    // startListeningToEvents();
    store.reducerManager.add(PlanningAreaSliceKey, planningAreaSliceReducer);
  }, []);

  const fetchData = () => {
    if (docNr && docType) {
      dispatch(fetchPlanningAreaDataByDocNr(`${docType}/${docNr}`));
    } else if (planningId && planningIdFromStore?.toString() !== planningId) {
      dispatch(fetchPlanningAreaData(planningId));
    }
  };

  useEffect(() => {
    fetchData();
  }, [isStoreMounted, planningId]);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<ArrowCircleUp />}
      >
        <Typography component="span">Planeeringuala</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!isStoreMounted || isLoading ? (
          <Box sx={{ display: 'flex', width: '100%' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PlanningAreaForm isEditable={permissions.edit} />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

// Wrap in redux context
const PlanningAreaSectionWithStore = (props) => {
  return (
    <ReduxProvider>
      <PlanningAreaSection {...props} />
    </ReduxProvider>
  );
};

export default PlanningAreaSectionWithStore;
