import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  documentState: '',
  notifications: [],
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setDocState: (state, action) => {
      state.documentState = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload];
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isetDocState, addNotification, setNotifications } =
  documentSlice.actions;

export const notificationsSelector = createSelector(
  (state) => state,
  (state) => state.document.notifications ?? [],
);

export default documentSlice.reducer;
