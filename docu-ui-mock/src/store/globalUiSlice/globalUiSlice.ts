import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ROLE_AKPERSON } from '../../constants/userConstants';
import { Role } from '../../permissions/permissionsConstants';

interface GlobalUiSliceState {
  notifications: string[];
  currentRole: string;
}

const initialState: GlobalUiSliceState = {
  notifications: [],
  currentRole: Role.Applicant,
};

export const globalUiSlice = createSlice({
  name: 'globalUi',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload];
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
    },
    cleanGlobalUISlice: (state) => {
      console.log('globalUi.cleanState triggered');
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNotification,
  setNotifications,
  cleanGlobalUISlice,
  setCurrentRole,
} = globalUiSlice.actions;

export const notificationsSelector = createSelector(
  (state) => state,
  (state) => state.globalUi?.notifications ?? [],
);

export const userCurrentRoleSelector = createSelector(
  (state) => state,
  (state) => state.globalUi?.currentRole ?? [],
);
