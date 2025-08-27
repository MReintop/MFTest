import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  something: 'something',
};

export const ehrUiSlice = createSlice({
  name: 'ehrUiSlice',
  initialState,
  reducers: {
    setSomething: (state, action) => {
      state.something = action.payload;
    },
  },
});

export const { setSomething } = ehrUiSlice.actions;

export const somethingSelector = createSelector(
  (state) => state,
  (state) => state.ehrUiSlice?.something ?? 'other',
);

export default ehrUiSlice.reducer;
