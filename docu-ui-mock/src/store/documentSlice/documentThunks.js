import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendNotification } from '../globalUiSlice/globalUiThunks';

const mockApplicationData = {
  1: {
    id: Math.random(),
    docNr: 1,
    docName: 'Document nr 1',
    state: 'Täiendamisel',
  },

  2: {
    id: Math.random(),
    docNr: 2,
    docName: 'Document nr 2',
    state: 'Menetluses',
  },
};

const getDocument = async (docNr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockApplicationData[docNr]);
    }, 1000);
  });
};

const saveCurrentDocument = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('saved');
    }, 1000);
  });
};

export const saveDocument = createAsyncThunk(
  'document/saveDocument',
  async (_, { dispatch }) => {
    const response = await saveCurrentDocument();

    dispatch(sendNotification('Dokument salvestatud!'));
    return response;
  },
);

export const fetchDocumentData = createAsyncThunk(
  'document/fetchDocumentData',
  async (docNr) => {
    const applicationDto = await getDocument(docNr);

    return applicationDto;
  },
);
