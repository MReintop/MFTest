import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  fetchPlanningData,
  fetchPlanningDataByDocNr,
} from '../thunks/planningGeneralDataThunks';

const initialState = {
  sliceMounted: true,
  planningName: '',
  planningId: undefined,
  type: undefined,
  goal: undefined,
  status: undefined,
  code: undefined,
  address: '',
  docNr: '',
  loading: false,
  error: false,
  planningDataErrors: undefined,
};

export const PlanningGeneralDataSliceKey = 'planningGeneralData';

export const planningGeneralDataSlice = createSlice({
  name: PlanningGeneralDataSliceKey,
  initialState,
  reducers: {
    setPlanningName: (state, action) => {
      state.planningName = action.payload;
    },

    setPlanningDataErrors: (state, action) => {
      state.planningDataErrors = action.payload;
    },

    removeError: (state, action) => {
      if (state.planningDataErrors) {
        delete state.planningDataErrors[action.payload];
      }
    },

    cleanPlanningGeneralDataSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanningData.fulfilled, (state, { payload }) => {
      state.loading = false;
      Object.assign(state, payload);
    });
    builder.addCase(fetchPlanningData.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchPlanningData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(
      fetchPlanningDataByDocNr.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        Object.assign(state, payload);
      },
    );
    builder.addCase(fetchPlanningDataByDocNr.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchPlanningDataByDocNr.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const selectSelf = (state) => state;

export const planningSliceMountedSelector = createSelector(
  selectSelf,
  (state) => state.planningGeneralData?.sliceMounted,
);

export const planningDataSelector = createSelector(selectSelf, (state) => {
  if (!state.planningGeneralData) {
    return undefined;
  }

  const { planningName, planningId, type, goal, status, address, code, docNr } =
    state.planningGeneralData;

  return { planningName, planningId, type, goal, status, address, code, docNr };
});

export const planningDataLoadingSelector = createSelector(
  selectSelf,
  (state) => state.planningGeneralData?.loading,
);

export const planningDataErrorSelector = createSelector(
  selectSelf,
  (state) => state.planningGeneralData?.error,
);

export const planningDataErrorsSelector = createSelector(
  selectSelf,
  (state) => state.planningGeneralData?.planningDataErrors,
);

// Action creators are generated for each case reducer function

export const {
  setPlanningName,
  cleanPlanningGeneralDataSlice,
  setPlanningDataErrors,
  removeError,
} = planningGeneralDataSlice.actions;

export default planningGeneralDataSlice.reducer;
