import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ROLE_AKPERSON } from '../constants/userConstants';

const initialState = {
  systemNotifications: [],
  currentRole: ROLE_AKPERSON,
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
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
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
  setCurrentRole,
} = ehrUiSlice.actions;

export const systemNotificationsSelector = createSelector(
  (state) => state,
  (state) => state.ehrUiSlice?.systemNotifications ?? [],
);

export const userCurrentRoleSelector = createSelector(
  (state) => state,
  (state) => state.ehrUiSlice?.currentRole ?? [],
);

export default ehrUiSlice.reducer;
