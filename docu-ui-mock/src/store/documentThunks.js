import { createAsyncThunk } from '@reduxjs/toolkit';

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
    console.log('SIIN SAVEN', state.document.documentState);

    const food = await saveCurrentDocument(state.document.documentStat);

    console.log('SIIN doc saved');
    return food;
  },
);
