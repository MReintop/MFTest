import * as React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import documentReducer from './documentSlice';

const store = configureStore({
  reducer: combineReducers({
    document: documentReducer,
  }),
});


export default store;
