import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchProcedingData } from './proceedingThunks';

const initialState = {
  documentState: '',
  // This is here just for example, notifications shouldnt be in documentSlice
  notifications: [],
  proceedingDto: undefined,
  proceedingDtoLoading: false,
};

export const proceedingSlice = createSlice({
  name: 'proceeding',
  initialState,
  reducers: {
    setProceedingName: (state, action) => {
      state.proceedingDto.proceedingName = action.payload;
    },
    setProceedingDto: (state, action) => {
      state.proceedingDto = action.payload;
    },
    cleanProceedingSlice: (state) => {
      console.log('SIIN proceedingSlice.cleanState triggered');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProcedingData.fulfilled, (state, { payload }) => {
      state.proceedingDtoLoading = false;
      state.proceedingDto = payload;
    });
    builder.addCase(fetchProcedingData.pending, (state) => {
      state.proceedingDtoLoading = true;
    });
    builder.addCase(fetchProcedingData.rejected, (state) => {
      state.proceedingDtoLoading = false;
      state.proceedingDto = undefined;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setProceedingName, setProceedingDto, cleanProceedingSlice } =
  proceedingSlice.actions;

export const proceedingDtoSelector = createSelector(
  (state) => state,
  (state) => state.proceeding?.proceedingDto ?? [],
);

export const proceedingDtoLoadingSelector = createSelector(
  (state) => state,
  (state) => state.proceeding?.proceedingDtoLoading ?? false,
);
