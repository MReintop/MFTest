import { store } from '.';
import {
  cleanPlanningAreaSlice,
  PlanningAreaSliceKey,
} from '../features/planningAreaFeatures/planningAreaSection/slice/planningAreaSlice';
import { savePlanningAreaData } from '../features/planningAreaFeatures/planningAreaSection/thunks/planningAreaThunks';
import {
  cleanPlanningGeneralDataSlice,
  PlanningGeneralDataSliceKey,
} from '../features/planningDataFeatures/planningGeneralDataSection/slice/planningGeneralDataSlice';
import { savePlanningGeneralData } from '../features/planningDataFeatures/planningGeneralDataSection/thunks/planningGeneralDataThunks';

// Ei saanud kasutada Promise.all või Promise.allSettled, ta kutsub dispatch välja
// Teoorias võiks saada siia mappida lihtsalt aga praegu ei suutnud välja mõelda

const saveFunctionsBySliceKey = new Map([
  [PlanningGeneralDataSliceKey, savePlanningGeneralData],
  [PlanningAreaSliceKey, savePlanningAreaData],
]);

export const handleSaveEvent = async () => {
  const existingReducers = Object.keys(store.getState());

  try {
    if (existingReducers.includes(PlanningGeneralDataSliceKey)) {
      await store.dispatch(savePlanningGeneralData());
    }

    if (existingReducers.includes(PlanningAreaSliceKey)) {
      await store.dispatch(savePlanningAreaData());
    }

    return true;
  } catch (e) {
    console.log('SIIN', e);
    return false;
  }
};

export const handleUnmountEvent = async () => {
  const existingReducers = Object.keys(store.getState());

  if (existingReducers.includes(PlanningGeneralDataSliceKey)) {
    // Kasutada ühte või teist, mitte mõlemat varianti
    store.dispatch(cleanPlanningGeneralDataSlice());

    store.reducerManager.remove(PlanningGeneralDataSliceKey);
  }

  if (existingReducers.includes(PlanningAreaSliceKey)) {
    store.dispatch(cleanPlanningAreaSlice());

    store.reducerManager.remove(PlanningAreaSliceKey);
  }
};
