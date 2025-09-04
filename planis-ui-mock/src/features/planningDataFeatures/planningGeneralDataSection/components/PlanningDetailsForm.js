import React, { useEffect, useRef } from 'react';
import {
  planningDataErrorsSelector,
  planningDataSelector,
  removeError,
  setPlanningDataErrors,
  setPlanningName,
} from '../slice/planningGeneralDataSlice';
import { Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useYupValidation } from '../../../../hooks/useYupValidation';
import PlanningDetailsFormValidationSchema from '../validation/PlanningDetailsFormValidationSchema';
import { EventBus, EventType } from '../../../../events/eventBus';

const PlanningDetailsForm = ({ isEditable }) => {
  const dispatch = useDispatch();

  const planningData = useSelector(planningDataSelector);
  const planningDataValidationRef = useRef(planningData);
  const planningDataErrors = useSelector(planningDataErrorsSelector);

  // Use ref for validation, so the data is up to date
  useEffect(() => {
    planningDataValidationRef.current = planningData;
  }, [planningData]);

  const { validate, getErrorMessagesByFieldName, errors, clearErrors } =
    useYupValidation(PlanningDetailsFormValidationSchema, planningDataErrors);

  const objectNotEmpty = (objectName) => {
    return (
      Object.keys(objectName).length > 0 && objectName.constructor === Object
    );
  };

  useEffect(() => {
    if (objectNotEmpty(errors)) {
      // Global event, et sektsioon sai errorid?

      dispatch(setPlanningDataErrors(errors));
    }
  }, [errors]);

  const validatePlanningData = () => {
    validate(planningDataValidationRef.current, () => {
      // Global event, et sektsioon valid?
    });
  };

  useEffect(() => {
    EventBus.on(EventType.Validate, validatePlanningData);
  }, []);

  const changeName = (event) => {
    // Need to keep errors in state so tab change will not affect
    clearErrors('planningName');
    dispatch(removeError('planningName'));

    dispatch(setPlanningName(event?.target?.value ?? ''));
  };

  return (
    <Grid container spacing={2} direction={'column'}>
      <Grid size={12} item>
        <TextField
          fullWidth
          id="code"
          label="Kood"
          variant="standard"
          value={planningData.code}
          disabled
        />
      </Grid>

      <Grid size={12} item>
        <TextField
          fullWidth
          id="docNr"
          label="Dokumendi number"
          variant="standard"
          value={planningData.docNr}
          disabled
        />
      </Grid>

      <Grid size={12} item>
        <TextField
          fullWidth
          id="name"
          label="Planeeringu nimetus"
          variant="standard"
          value={planningData.planningName}
          error={!!getErrorMessagesByFieldName('planningName')}
          helperText={getErrorMessagesByFieldName['planningName']}
          onChange={changeName}
          disabled={!isEditable}
        />
      </Grid>

      <Grid size={12} item>
        <TextField
          fullWidth
          id="type"
          label="Planeeringu tüüp"
          variant="standard"
          value={planningData.type}
          disabled
        />
      </Grid>

      <Grid size={12} item>
        <TextField
          fullWidth
          id="goal"
          label="Planeeringu eesmärk"
          variant="standard"
          value={planningData.goal}
          disabled
        />
      </Grid>

      <Grid size={12} item>
        <TextField
          fullWidth
          id="status"
          label="Planeeringu staatus"
          variant="standard"
          value={planningData.status}
          disabled
        />
      </Grid>
    </Grid>
  );
};

export default PlanningDetailsForm;
