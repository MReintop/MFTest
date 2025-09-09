import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import {
  applicationDtoLoadingSelector,
  applicationDtoSelector,
} from '../../store/documentSlice/documentSlice';
import { fetchDocumentDataByPlanningId } from '../../store/documentSlice/documentThunks';
import { AppThunkDispatch } from '../../store/types';

const PlanningPageDataLoader = ({ children }) => {
  const { planningId } = useParams();
  const dispatch = useDispatch<AppThunkDispatch>();

  const applicationDto = useSelector(applicationDtoSelector);
  const isLoading = useSelector(applicationDtoLoadingSelector);

  useEffect(() => {
    if (
      (planningId && !applicationDto) ||
      (planningId && applicationDto.planningId !== planningId)
    ) {
      dispatch(fetchDocumentDataByPlanningId(planningId));
    }
  }, [planningId]);

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default PlanningPageDataLoader;
