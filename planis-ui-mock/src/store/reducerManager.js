import { combineReducers } from 'redux';

export function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);

  // TODO : Kuna alguses tühi siis viskab errorit store loomisel
  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => combinedReducer(state, action),
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      combinedReducer = combineReducers(reducers);
    },
  };
}
