import * as React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { documentSlice } from './documentSlice/documentSlice';
import { createReducerManager } from './reducerManager';
import { globalUiSlice } from './globalUiSlice/globalUiSlice';
import { proceedingSlice } from './proceedingSlice/proceedingSlice';

export function configureAppStore() {
  const reducerManager = createReducerManager({
    document: documentSlice.reducer,
    proceeding: proceedingSlice.reducer,
    globalUi: globalUiSlice.reducer,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
  });

  store.reducerManager = reducerManager;
  return store;
}

const store = configureAppStore();

export default store;
