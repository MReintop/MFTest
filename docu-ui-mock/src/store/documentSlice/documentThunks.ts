import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendNotification } from '../globalUiSlice/globalUiThunks';
import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from '../../pages/docPage/documentHelpers';
import { DocumentState } from '../../permissions/permissionsConstants';

export interface ApplicationDto {
  id: number;
  docNr: string;
  docName: string;
  state: DocumentState;
  planningId: number;
}

const mockApplicationData = {
  [mockDocNr12973]: {
    id: Math.random(),
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
    docName: `Document nr ${mockDocType12973}/${mockDocNr12973}`,
    state: DocumentState.MENETLUSES,
    planningId: 1,
  },

  [mockDocNr12976]: {
    id: Math.random(),
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
    docName: `Document nr ${mockDocType12976}/${mockDocNr12976}`,
    state: DocumentState.KOOSTAMISEL,
    planningId: 2,
  },
};

const mockApplicationDataByPlanningId = {
  1: {
    id: Math.random(),
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
    docName: `Document nr ${mockDocType12973}/${mockDocNr12973}`,
    state: DocumentState.MENETLUSES,
    planningId: 1,
  },

  2: {
    id: Math.random(),
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
    docName: `Document nr ${mockDocType12976}/${mockDocNr12976}`,
    state: DocumentState.KOOSTAMISEL,
    planningId: 2,
  },
};

const getDocument = async (docNr): Promise<ApplicationDto> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockApplicationData[docNr]);
    }, 1000);
  });
};

const getDocumentByPlanningId = async (planningId): Promise<ApplicationDto> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockApplicationDataByPlanningId[planningId]);
    }, 1000);
  });
};

const saveCurrentDocument = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const saveDocument = createAsyncThunk<void, void>(
  'document/saveDocument',
  async (_, { dispatch }) => {
    const response = await saveCurrentDocument();

    dispatch(sendNotification('Dokument salvestatud!'));
    return response;
  },
);

export const fetchDocumentData = createAsyncThunk<ApplicationDto, string>(
  'document/fetchDocumentData',
  async (docNr) => {
    const applicationDto = await getDocument(docNr);

    return applicationDto;
  },
);

export const fetchDocumentDataByPlanningId = createAsyncThunk<
  ApplicationDto,
  string
>('document/fetchDocumentDataByPlanningId', async (planningId) => {
  const applicationDto = await getDocumentByPlanningId(planningId);

  return applicationDto;
});
