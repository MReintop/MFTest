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
import { store } from '../store';
import { EventBus, EventType } from './eventBus';

export const handleSaveEvent = async () => {
  const existingReducers = Object.keys(store.getState());

  if (!existingReducers.length) {
    EventBus.emit(EventType.PlanningModuleSaved);
    return;
  }

  try {
    if (existingReducers.includes(PlanningGeneralDataSliceKey)) {
      await store.dispatch(savePlanningGeneralData());
    }

    if (existingReducers.includes(PlanningAreaSliceKey)) {
      await store.dispatch(savePlanningAreaData());
    }

    EventBus.emit(EventType.PlanningModuleSaved);

    return true;
  } catch (e) {
    console.log('SIIN', e);
    return false;
  }
};

export const handleUnmountEvent = async () => {
  const existingReducers = Object.keys(store.getState());

  console.log('SIIN unmount triggered');
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
