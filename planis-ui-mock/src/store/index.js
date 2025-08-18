import { configureStore } from '@reduxjs/toolkit';
import foodSlice from './foodSlice';
import { createReducerManager } from './reducerManager';

export function configureAppStore() {
  const reducerManager = createReducerManager({ food: foodSlice });

  const store = configureStore({
    reducer: reducerManager.reduce,
  });

  store.reducerManager = reducerManager;
  return store;
}

export const store = configureAppStore();
