import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  fetchDocumentData,
  fetchDocumentDataByPlanningId,
} from './documentThunks';

const initialState = {
  applicationDto: undefined,
  applicationDtoLoading: false,
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setDocumentName: (state, action) => {
      state.applicationDto.docName = action.payload;
    },
    setApplicationDto: (state, action) => {
      state.applicationDto = action.payload;
    },
    cleanDocumentSlice: (state) => {
      console.log('SIIN documentSlice.cleanState triggered');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentData.fulfilled, (state, { payload }) => {
      state.applicationDtoLoading = false;
      state.applicationDto = payload;
    });
    builder.addCase(fetchDocumentData.pending, (state) => {
      state.applicationDtoLoading = true;
    });
    builder.addCase(fetchDocumentData.rejected, (state) => {
      state.applicationDtoLoading = false;
      state.applicationDto = undefined;
    });

    builder.addCase(
      fetchDocumentDataByPlanningId.fulfilled,
      (state, { payload }) => {
        state.applicationDtoLoading = false;
        state.applicationDto = payload;
      },
    );
    builder.addCase(fetchDocumentDataByPlanningId.pending, (state) => {
      state.applicationDtoLoading = true;
    });
    builder.addCase(fetchDocumentDataByPlanningId.rejected, (state) => {
      state.applicationDtoLoading = false;
      state.applicationDto = undefined;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setDocumentName, cleanDocumentSlice, setApplicationDto } =
  documentSlice.actions;

export const applicationDtoSelector = createSelector(
  (state) => state,
  (state) => state.document?.applicationDto ?? [],
);

export const applicationDtoLoadingSelector = createSelector(
  (state) => state,
  (state) => state.document?.applicationDtoLoading ?? false,
);
