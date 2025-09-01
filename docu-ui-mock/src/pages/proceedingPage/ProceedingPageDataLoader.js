import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import {
  applicationDtoLoadingSelector,
  applicationDtoSelector,
} from '../../store/documentSlice/documentSlice';
import { fetchDocumentData } from '../../store/documentSlice/documentThunks';
import { fetchProcedingData } from '../../store/proceedingSlice/proceedingThunks';
import {
  proceedingDtoLoadingSelector,
  proceedingDtoSelector,
} from '../../store/proceedingSlice/proceedingSlice';

const ProceedingPageDataLoader = ({ children }) => {
  const { proceedingNr } = useParams();
  const dispatch = useDispatch();

  const applicationDto = useSelector(applicationDtoSelector);
  const proceedingDto = useSelector(proceedingDtoSelector);

  const proceedingLoading = useSelector(proceedingDtoLoadingSelector);
  const documentLoading = useSelector(applicationDtoLoadingSelector);

  useEffect(() => {
    if (
      !proceedingDto?.proceedingNr ||
      proceedingDto.proceedingNr !== proceedingNr
    ) {
      dispatch(fetchProcedingData(proceedingNr));
    }
  }, [proceedingNr]);

  useEffect(() => {
    if (!applicationDto || proceedingDto.docNr !== applicationDto.docNr) {
      dispatch(fetchDocumentData(proceedingDto.docNr));
    }
  }, [proceedingDto]);

  return (
    <>
      {proceedingLoading || documentLoading ? (
        <Box sx={{ display: 'flex', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default ProceedingPageDataLoader;
