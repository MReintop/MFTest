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

const Application12973PageDataLoader = ({ children }) => {
  const { docNr, docType } = useParams();
  const dispatch = useDispatch<AppThunkDispatch>();

  const applicationDto = useSelector(applicationDtoSelector);
  const isLoading = useSelector(applicationDtoLoadingSelector);

  useEffect(() => {
    if (docNr && (!applicationDto?.docNr || applicationDto.docNr !== docNr)) {
      dispatch(fetchDocumentData(`${docType}/${docNr}`));
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

export default Application12973PageDataLoader;
