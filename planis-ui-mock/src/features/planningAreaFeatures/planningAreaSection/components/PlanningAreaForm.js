import React from 'react';

import { Box, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  areaSizeSelector,
  planningCoordinatesSelector,
  setPlanningAreaSize,
} from '../slice/planningAreaSlice';

const PlanningAreaForm = ({ isEditable }) => {
  const dispatch = useDispatch();

  const plannignAreaCoordinates = useSelector(planningCoordinatesSelector);
  const areaSize = useSelector(areaSizeSelector);

  const changeAreaSize = (event) => {
    dispatch(setPlanningAreaSize(event?.target?.value ?? ''));
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid size={12} item>
        <TextField
          fullWidth
          id="area_size"
          label="Ala suurus"
          variant="standard"
          value={areaSize}
          onChange={changeAreaSize}
          disabled={!isEditable}
        />
      </Grid>

      <Grid size={12} item>
        <Typography>Koordinaadid : </Typography>
        {plannignAreaCoordinates?.map((coordinate) => (
          <Box padding={1} key={coordinate[1]}>
            {coordinate[0]} - {coordinate[1]}
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlanningAreaForm;
