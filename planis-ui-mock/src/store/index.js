import { configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';

export function configureAppStore() {
  const reducerManager = createReducerManager({});

  const store = configureStore({
    reducer: reducerManager.reduce,
  });

  store.reducerManager = reducerManager;
  return store;
}

export const store = configureAppStore();
