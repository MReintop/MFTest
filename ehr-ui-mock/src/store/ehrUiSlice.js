import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  systemNotifications: [],
};

export const ehrUiSlice = createSlice({
  name: 'ehrUiSlice',
  initialState,
  reducers: {
    setSystemNotifications: (state, action) => {
      state.systemNotifications = action.payload;
    },
    addSystemNotification: (state, action) => {
      state.systemNotifications = [
        ...state.systemNotifications,
        action.payload,
      ];
    },
    cleanEhrUiSlice: () => {
      return initialState;
    },
  },
});

export const {
  setSystemNotifications,
  addSystemNotification,
  cleanEhrUiSlice,
} = ehrUiSlice.actions;

export const systemNotificationsSelector = createSelector(
  (state) => state,
  (state) => state.ehrUiSlice?.systemNotifications ?? [],
);

export default ehrUiSlice.reducer;
