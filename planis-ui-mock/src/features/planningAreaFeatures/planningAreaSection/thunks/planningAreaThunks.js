import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from '../../../../constants/documentConstants';

const mockPlanningAreaData = {
  1: {
    id: Math.random(),
    planningId: 1,
    areaSize: '135000',
    coordinates: [[24234234, 234324234]],
  },

  2: {
    id: Math.random(),
    planningId: 2,
    areaSize: '249000',
    coordinates: [
      [24234234, 234324234],
      [121232131, 123213],
    ],
  },
};

const mockPlanningAreaDataByDocNr = {
  [`${mockDocType12973}/${mockDocNr12973}`]: {
    id: Math.random(),
    id: Math.random(),
    planningId: 1,
    areaSize: '135000',
    coordinates: [[24234234, 234324234]],
    docNr: `${mockDocType12973}/${mockDocNr12973}`,
  },

  [`${mockDocType12976}/${mockDocNr12976}`]: {
    id: Math.random(),
    planningId: 2,
    areaSize: '249000',
    coordinates: [
      [24234234, 234324234],
      [121232131, 123213],
    ],
    docNr: `${mockDocType12976}/${mockDocNr12976}`,
  },
};

const getPlanningAreaData = async (planningId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockPlanningAreaData[planningId]);
    }, 1000);
  });
};

const getPlanningAreaDataByDocNr = async (docNr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockPlanningAreaDataByDocNr[docNr]);
    }, 1000);
  });
};

export const fetchPlanningAreaData = createAsyncThunk(
  'planningArea/fetchPlanningData',
  async (planningId) => {
    const planningAreaData = await getPlanningAreaData(planningId);
    return planningAreaData;
  },
);

export const fetchPlanningAreaDataByDocNr = createAsyncThunk(
  'planningArea/fetchPlanningAreaDataByDocNr',
  async (docNr) => {
    console.log('SIIN fetchin docNr järgi', docNr);

    const planningAreaData = await getPlanningAreaDataByDocNr(docNr);
    return planningAreaData;
  },
);

const savePlanningArea = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const savePlanningAreaData = createAsyncThunk(
  'planningArea/savePlanningAreaData',
  async (_, { getState }) => {
    const state = getState();
    console.log('SIIN SAVEN AREA DATAT', state.planningArea);
    const res = await savePlanningArea();
    return res;
  },
);
