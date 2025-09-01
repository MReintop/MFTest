import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  TextField,
} from '@mui/material';
import { ArrowCircleDown } from '@mui/icons-material';

import {
  applicationDtoSelector,
  setDocumentName,
} from '../store/documentSlice/documentSlice';

const DocumentGeneralDataSection = ({ isEditable = true }) => {
  const dispatch = useDispatch();

  const applicationDto = useSelector(applicationDtoSelector);

  const changeName = (event) => {
    dispatch(setDocumentName(event?.target?.value ?? ' '));
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<ArrowCircleDown />}
      >
        <Typography component="span">Dokumendi üldinfo</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={2} direction={'column'}>
          <Grid size={12} item>
            <TextField
              fullWidth
              id="doc-name"
              label="Dokumendi nimetus"
              variant="standard"
              value={applicationDto.docName}
              onChange={changeName}
              disabled={!isEditable}
            />
          </Grid>

          <Grid size={12} item>
            <TextField
              fullWidth
              id="doc-state"
              label="Dokumendi staatus"
              variant="standard"
              value={applicationDto.state}
              disabled
            />
          </Grid>

          <Grid size={12} item>
            <TextField
              fullWidth
              id="doc-nr"
              label="Dokumendi number"
              variant="standard"
              value={applicationDto.docNr}
              disabled
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default DocumentGeneralDataSection;
