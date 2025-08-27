import { store } from '../store';
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
import { EventBus, EventType } from './eventBus';

// Ei saanud kasutada Promise.all või Promise.allSettled, ta kutsub dispatch välja
// Teoorias võiks saada siia mappida lihtsalt aga praegu ei suutnud välja mõelda

// Saaks siin inittida store iseenesest ja küsida andmeid? Või teeb seda ikkagi store. Save hetkel ei tee midagi
export const startListeningToEvents = () => {
  console.log('SIIN alusab planis kuulamist');
  EventBus.on(EventType.Save, function () {
    handleSaveEvent();
  });
  EventBus.on(EventType.Unmount, function () {
    console.log('SIIN sain unmount');
    handleUnmountEvent();
  });
};

export const stopListeningToEvents = () => {
  EventBus.off(EventType.Save);
  EventBus.off(EventType.Unmount);
};

export const handleSaveEvent = async () => {
  const existingReducers = Object.keys(store.getState());

  console.log('SIIN save triggered in module');
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

  stopListeningToEvents();
};
