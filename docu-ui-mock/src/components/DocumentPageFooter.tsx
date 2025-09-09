import React, { useContext } from 'react';

import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { applicationDtoSelector } from '../store/documentSlice/documentSlice';
import ValidationContext from '../contexts/ValidationContext';
import { EventBus, EventType } from '../events/eventBus';
import { AppThunkDispatch } from '../store/types';
import { saveDocument } from '../store/documentSlice/documentThunks';
import { userCurrentRoleSelector } from '../store/globalUiSlice/globalUiSlice';
import usePageButtonPermissions from '../permissions/permissionHooks/usePageButtonPermissions';
import { DocumentButtons } from '../permissions/permissionsConstants';

const DocumentPageFooter = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const applicationDto = useSelector(applicationDtoSelector);
  const userRole = useSelector(userCurrentRoleSelector);

  const { validate } = useContext(ValidationContext);

  const buttons = usePageButtonPermissions({
    documentState: applicationDto.state,
    userRole,
  });

  const saveDocumentModule = () => {
    dispatch(saveDocument());
  };

  const saveClicked = async () => {
    validate(applicationDto, () => {
      // Global event
      // Listen to planning module saved once. Perhaps this can be handled in backend?
      EventBus.once(EventType.PlanningModuleSaved, saveDocumentModule);

      EventBus.emit(EventType.Save);
    });
  };

  const sendSomeSystemNotification = () => {
    EventBus.emit(EventType.SystemNotification, {
      message: 'Some system notification here!',
    });
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {buttons.includes(DocumentButtons.Save) && (
        <Button variant="outlined" onClick={() => saveClicked()}>
          Salvestan
        </Button>
      )}

      {buttons.includes(DocumentButtons.Present) && (
        <Button onClick={() => sendSomeSystemNotification()}>Esitan</Button>
      )}
    </Box>
  );
};

export default DocumentPageFooter;
