import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from './globalUiSlice';

export const sendNotification = createAsyncThunk<void, string>(
  'globalUi/sendNotification',
  async (message, { dispatch }) => {
    dispatch(addNotification(message));
  },
);
