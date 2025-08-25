import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from './documentSlice';

const saveCurrentDocument = async (docState) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const saveDocument = createAsyncThunk(
  'document/saveDocument',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const food = await saveCurrentDocument(state.document.documentStat);
    dispatch(addNotification('Dokument salvestatud'));
    return food;
  },
);

export const sendNotification = createAsyncThunk(
  'document/sendNotification',
  async (message, { dispatch }) => {
    dispatch(addNotification(message));
  },
);
