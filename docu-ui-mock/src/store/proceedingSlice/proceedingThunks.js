import { createAsyncThunk } from '@reduxjs/toolkit';

const mockProceedingDtos = {
  1: {
    id: Math.random(),
    docNr: 1,
    proceedingName: 'Menetluse nimi 1',
    state: 'Täiendamisel',
  },

  2: {
    id: Math.random(),
    docNr: 2,
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
