import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  fetchPlanningAreaData,
  fetchPlanningAreaDataByDocNr,
} from '../thunks/planningAreaThunks';

const initialState = {
  sliceMounted: true,
  planningId: undefined,
  areaSize: undefined,
  coordinates: [],
  loading: false,
  error: false,
};

export const PlanningAreaSliceKey = 'planningArea';

export const planningAreaSlice = createSlice({
  name: PlanningAreaSliceKey,
  initialState,
  reducers: {
    setPlanningCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    setPlanningAreaSize: (state, action) => {
      state.areaSize = action.payload;
    },
    cleanPlanningAreaSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanningAreaData.fulfilled, (state, { payload }) => {
      state.loading = false;
      Object.assign(state, payload);
    });
    builder.addCase(fetchPlanningAreaData.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchPlanningAreaData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(
      fetchPlanningAreaDataByDocNr.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        Object.assign(state, payload);
      },
    );
    builder.addCase(fetchPlanningAreaDataByDocNr.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchPlanningAreaDataByDocNr.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const selectSelf = (state) => state;

export const planningAreaSliceMountedSelector = createSelector(
  selectSelf,
  (state) => state.planningArea?.sliceMounted,
);

export const planningAreaIdSelector = createSelector(
  selectSelf,
  (state) => state.planningArea?.planningId,
);

export const planningCoordinatesSelector = createSelector(
  selectSelf,
  (state) => {
    return state.planningArea?.coordinates;
  },
);

export const areaSizeSelector = createSelector(selectSelf, (state) => {
  return state.planningArea?.areaSize;
});

export const planningAreaLoadingSelector = createSelector(
  selectSelf,
  (state) => state.planningArea?.loading,
);

export const planningAreaErrorSelector = createSelector(
  selectSelf,
  (state) => state.planningArea?.error,
);

// Action creators are generated for each case reducer function
export const {
  setPlanningCoordinates,
  setPlanningAreaSize,
  cleanPlanningAreaSlice,
} = planningAreaSlice.actions;

export default planningAreaSlice.reducer;
