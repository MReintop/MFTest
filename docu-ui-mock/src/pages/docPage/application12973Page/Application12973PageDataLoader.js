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

const Application12973PageDataLoader = ({ children }) => {
  const { docNr } = useParams();
  const dispatch = useDispatch();

  const applicationDto = useSelector(applicationDtoSelector);
  const isLoading = useSelector(applicationDtoLoadingSelector);

  useEffect(() => {
    if (!applicationDto?.docNr || applicationDto.docNr !== docNr) {
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

export default Application12973PageDataLoader;
