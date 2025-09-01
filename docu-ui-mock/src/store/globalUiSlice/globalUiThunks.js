import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from './globalUiSlice';

export const sendNotification = createAsyncThunk(
  'globalUi/sendNotification',
  async (message, { dispatch }) => {
    dispatch(addNotification(message));
  },
);
