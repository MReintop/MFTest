import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendNotification } from '../globalUiSlice/globalUiThunks';
import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from '../../pages/docPage/documentHelpers';

const mockApplicationData = {
  [mockDocNr12973]: {
    id: Math.random(),
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
    docName: `Document nr ${mockDocType12973}/${mockDocNr12973}`,
    state: 'Täiendamisel',
    planningId: 1,
  },

  [mockDocNr12976]: {
    id: Math.random(),
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
    docName: `Document nr ${mockDocType12976}/${mockDocNr12976}`,
    state: 'Menetluses',
    planningId: 2,
  },
};

const mockApplicationDataByPlanningId = {
  1: {
    id: Math.random(),
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
    docName: `Document nr ${mockDocType12973}/${mockDocNr12973}`,
    state: 'Täiendamisel',
    planningId: 1,
  },

  2: {
    id: Math.random(),
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
    docName: `Document nr ${mockDocType12976}/${mockDocNr12976}`,
    state: 'Menetluses',
    planningId: 2,
  },
};

const getDocument = async (docNr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockApplicationData[docNr]);
    }, 1000);
  });
};

const getDocumentByPlanningId = async (planningId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockApplicationDataByPlanningId[planningId]);
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

export const fetchDocumentDataByPlanningId = createAsyncThunk(
  'document/fetchDocumentDataByPlanningId',
  async (planningId) => {
    const applicationDto = await getDocumentByPlanningId(planningId);

    return applicationDto;
  },
);
