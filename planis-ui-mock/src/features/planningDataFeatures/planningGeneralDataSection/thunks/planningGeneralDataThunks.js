import { createAsyncThunk } from '@reduxjs/toolkit';
import { PlanningGeneralDataSliceKey } from '../slice/planningGeneralDataSlice';
import { EventBus, EventType } from '../../../../events/eventBus';

const mockPlanningData = {
  1: {
    id: Math.random(),
    planningId: 1,
    planningName: 'Planeering Id 1, Laagna tee',
    address: 'Laagna tee 123, Tallinn',
    type: 'Detailplaneering',
    goal: 'Siia pikk tekst miks vaja on',
    status: 'SEISUND_MENETLUSES_VMS',
    code: '1312XXX',
  },

  2: {
    id: Math.random(),
    planningId: 2,
    planningName: 'Planeering Id 2, Ehitajate tee',
    address: 'Ehitajate tee 56-58, Tallinn',
    type: 'Detailplaneering',
    goal: 'Siia teistsugune tekst miks vaja on planeeringut',
    status: 'SEISUND_MENETLUSES_VMS',
    code: '2342342342',
  },
};

const getPlanningData = async (planningId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockPlanningData[planningId]);
    }, 1000);
  });
};

export const fetchPlanningData = createAsyncThunk(
  'planningGeneralData/fetchPlanningData',
  async (planningId) => {
    const planningData = await getPlanningData(planningId);

    return planningData;
  },
);

const savePlanningData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const savePlanningGeneralData = createAsyncThunk(
  'planningGeneralData/savePlanningGeneralData',
  async (_, { getState }) => {
    const state = getState();
    console.log('SIIN SAVEN GENERAL DATAT', state[PlanningGeneralDataSliceKey]);
    const res = await savePlanningData();
    console.log('SIIN GENERAL DATA SAVED');
    EventBus.emit(EventType.Notification, { message: 'Planning module saved' });
    return res;
  },
);
