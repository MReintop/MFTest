import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  documentState: '',
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setDocState: (state, action) => {
      state.documentState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isetDocState } = documentSlice.actions;

export default documentSlice.reducer;
