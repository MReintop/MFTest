import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  mockDocNr12973,
  mockDocNr12976,
} from '../../pages/docPage/documentHelpers';

const mockProceedingDtos = {
  1: {
    id: Math.random(),
    docNr: mockDocNr12973,
    proceedingName: 'Menetluse nimi 1',
    state: 'Täiendamisel',
  },

  2: {
    id: Math.random(),
    docNr: mockDocNr12976,
    proceedingName: 'Menetluse nimi 2',
    state: 'Menetluses',
  },
};

const getProceeding = async (proceedingNr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProceedingDtos[proceedingNr]);
    }, 1000);
  });
};

export const fetchProcedingData = createAsyncThunk(
  'proceeding/fetchProcedingData',
  async (proceedingNr) => {
    const proceedingDto = await getProceeding(proceedingNr);

    return proceedingDto;
  },
);
