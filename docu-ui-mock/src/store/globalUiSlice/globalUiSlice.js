import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
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
    cleanGlobalUISlice: (state) => {
      console.log('globalUi.cleanState triggered');
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNotification, setNotifications, cleanGlobalUISlice } =
  globalUiSlice.actions;

export const notificationsSelector = createSelector(
  (state) => state,
  (state) => state.globalUi?.notifications ?? [],
);
