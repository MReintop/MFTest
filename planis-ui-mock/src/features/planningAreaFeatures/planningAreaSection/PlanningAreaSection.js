import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  CircularProgress,
} from '@mui/material';
import { FontDownloadOffRounded } from '@mui/icons-material';
import { useDispatch, useSelector, useStore } from 'react-redux';
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
import { fetchPlanningAreaData } from './thunks/planningAreaThunks';

const PlanningAreaSection = ({ permissions }) => {
  const { planningId } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(planningAreaLoadingSelector);
  const isStoreMounted = useSelector(planningAreaSliceMountedSelector);
  const planningIdFromStore = useSelector(planningAreaIdSelector);

  useEffect(() => {
    store.reducerManager.add(PlanningAreaSliceKey, planningAreaSliceReducer);
  }, []);

  useEffect(() => {
    if (planningId && planningIdFromStore?.toString() !== planningId) {
      dispatch(fetchPlanningAreaData(planningId));
    }
  }, [isStoreMounted, planningId]);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<FontDownloadOffRounded />}
      >
        <Typography component="span">Planeeringuala</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!isStoreMounted || isLoading ? (
          <Box sx={{ display: 'flex', width: '100%' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PlanningAreaForm isEditable={permissions?.includes('W')} />
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
