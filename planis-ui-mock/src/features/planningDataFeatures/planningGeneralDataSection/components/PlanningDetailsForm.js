import React from 'react';
import {
  planningDataSelector,
  setPlanningName,
} from '../slice/planningGeneralDataSlice';
import { Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const PlanningDetailsForm = ({ isEditable }) => {
  const dispatch = useDispatch();

  const planningData = useSelector(planningDataSelector);

  const changeName = (event) => {
    dispatch(setPlanningName(event?.target?.value ?? ' '));
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
          id="name"
          label="Planeeringu nimetus"
          variant="standard"
          value={planningData.planningName}
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
