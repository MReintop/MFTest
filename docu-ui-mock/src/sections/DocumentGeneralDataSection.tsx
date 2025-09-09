import React, { useContext } from 'react';
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
import ValidationContext from '../contexts/ValidationContext';
import usePageSectionPermissions from '../permissions/permissionHooks/usePageSectionPermissions';
import { PageSection } from '../permissions/permissionsConstants';
import { userCurrentRoleSelector } from '../store/globalUiSlice/globalUiSlice';

const DocumentGeneralDataSection = () => {
  const dispatch = useDispatch();

  const applicationDto = useSelector(applicationDtoSelector);
  const userRole = useSelector(userCurrentRoleSelector);

  const { edit, read } = usePageSectionPermissions({
    sectionName: PageSection.DocumentGeneralDataSection,
    params: { userRole, documentState: applicationDto.state },
  });

  const { clearErrors, getErrorMessagesByFieldName } =
    useContext(ValidationContext);

  const changeName = (event) => {
    clearErrors('docName');
    dispatch(setDocumentName(event?.target?.value ?? ' '));
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
        <Typography component="span">Dokumendi üldinfo</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={2} direction={'column'}>
          <Grid item>
            <TextField
              fullWidth
              id="doc-name"
              label="Dokumendi nimetus"
              variant="standard"
              value={applicationDto.docName}
              onChange={changeName}
              error={!!getErrorMessagesByFieldName('docName')}
              helperText={getErrorMessagesByFieldName('docName')}
              disabled={!edit}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              id="doc-state"
              label="Dokumendi staatus"
              variant="standard"
              value={applicationDto.state}
              disabled
            />
          </Grid>

          <Grid item>
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
