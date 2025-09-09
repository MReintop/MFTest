import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from '../../pages/docPage/documentHelpers';

export interface ProceedingDto {
  id: Number;
  docNr: string;
  proceedingName: string;
  state: string;
}

const mockProceedingDtos = {
  1: {
    id: Math.random(),
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
    proceedingName: 'Menetluse nimi 1',
    state: 'Täiendamisel',
  },

  2: {
    id: Math.random(),
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
    proceedingName: 'Menetluse nimi 2',
    state: 'Menetluses',
  },
};

const getProceeding = async (proceedingNr): Promise<ProceedingDto> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProceedingDtos[proceedingNr]);
    }, 1000);
  });
};

export const fetchProcedingData = createAsyncThunk<ProceedingDto, string>(
  'proceeding/fetchProcedingData',
  async (proceedingNr) => {
    const proceedingDto = await getProceeding(proceedingNr);

    return proceedingDto;
  },
);
