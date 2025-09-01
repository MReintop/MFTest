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
  proceedingDtoSelector,
  setProceedingName,
} from '../store/proceedingSlice/proceedingSlice';

// TODO : Handle permissions
const ProceedingGeneralDataSection = ({ isEditable = true }) => {
  const dispatch = useDispatch();

  const proceedingDto = useSelector(proceedingDtoSelector);

  const changeName = (event) => {
    dispatch(setProceedingName(event?.target?.value ?? ' '));
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<ArrowCircleDown />}
      >
        <Typography component="span">Menetluse üldinfo</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={2} direction={'column'}>
          <Grid size={12} item>
            <TextField
              fullWidth
              id="proc-name"
              label="Menetluse nimetus"
              variant="standard"
              value={proceedingDto.proceedingName}
              onChange={changeName}
              disabled={!isEditable}
            />
          </Grid>

          <Grid size={12} item>
            <TextField
              fullWidth
              id="proc-state"
              label="Dokumendi staatus"
              variant="standard"
              value={proceedingDto.state}
              disabled
            />
          </Grid>

          <Grid size={12} item>
            <TextField
              fullWidth
              id="doc-nr"
              label="Dokumendi number"
              variant="standard"
              value={proceedingDto.docNr}
              disabled
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProceedingGeneralDataSection;
