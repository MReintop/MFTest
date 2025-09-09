import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchProcedingData, ProceedingDto } from './proceedingThunks';

interface ProceedingSliceState {
  documentState: string;
  proceedingDto?: ProceedingDto;
  proceedingDtoLoading: boolean;
}

const initialState: ProceedingSliceState = {
  documentState: '',

  proceedingDto: undefined,
  proceedingDtoLoading: false,
};

export const proceedingSlice = createSlice({
  name: 'proceeding',
  initialState,
  reducers: {
    setProceedingName: (state, action) => {
      if (state.proceedingDto) {
        state.proceedingDto.proceedingName = action.payload;
      }
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
