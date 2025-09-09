import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { fetchDocumentData } from '../../../store/documentSlice/documentThunks';
import {
  applicationDtoLoadingSelector,
  applicationDtoSelector,
} from '../../../store/documentSlice/documentSlice';
import { AppThunkDispatch } from '../../../store/types';

const Permit12976PageDataLoader = ({ children }) => {
  const { docNr } = useParams();
  const dispatch = useDispatch<AppThunkDispatch>();

  const applicationDto = useSelector(applicationDtoSelector);
  const isLoading = useSelector(applicationDtoLoadingSelector);

  useEffect(() => {
    if (docNr && (!applicationDto?.docNr || applicationDto.docNr !== docNr)) {
      dispatch(fetchDocumentData(docNr));
    }
  }, [docNr]);

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

export default Permit12976PageDataLoader;
