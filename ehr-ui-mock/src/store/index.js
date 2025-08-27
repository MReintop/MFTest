import * as React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import ehrUiReducer from './ehrUiSlice';
import { createReducerManager } from './reducerManager';

export function configureAppStore() {
  const reducerManager = createReducerManager({ ehrUiSlice: ehrUiReducer });

  const store = configureStore({
    reducer: reducerManager.reduce,
  });

  store.reducerManager = reducerManager;
  return store;
}

const store = configureAppStore();

export default store;
