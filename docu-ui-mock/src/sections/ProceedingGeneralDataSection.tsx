import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  TextField,
  Grid,
} from '@mui/material';
import { ArrowCircleDown } from '@mui/icons-material';

import {
  proceedingDtoSelector,
  setProceedingName,
} from '../store/proceedingSlice/proceedingSlice';
import { PageSection } from '../permissions/permissionsConstants';
import usePageSectionPermissions from '../permissions/permissionHooks/usePageSectionPermissions';
import { applicationDtoSelector } from '../store/documentSlice/documentSlice';
import { userCurrentRoleSelector } from '../store/globalUiSlice/globalUiSlice';

const ProceedingGeneralDataSection = () => {
  const dispatch = useDispatch();

  const proceedingDto = useSelector(proceedingDtoSelector);
  const applicationDto = useSelector(applicationDtoSelector);
  const userRole = useSelector(userCurrentRoleSelector);

  const { edit, read } = usePageSectionPermissions({
    sectionName: PageSection.ProceedingGeneralDataSection,
    userRole,
    documentState: applicationDto.state,
  });

  const changeName = (event) => {
    dispatch(setProceedingName(event?.target?.value ?? ' '));
  };

  if (!read) {
    return <></>;
  }

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
          <Grid item>
            <TextField
              fullWidth
              id="proc-name"
              label="Menetluse nimetus"
              variant="standard"
              value={proceedingDto.proceedingName}
              onChange={changeName}
              disabled={!edit}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              id="proc-state"
              label="Dokumendi staatus"
              variant="standard"
              value={proceedingDto.state}
              disabled
            />
          </Grid>

          <Grid item>
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
