import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PlanningGeneralDataSection from './features/planningDataFeatures/planningGeneralDataSection/PlanningGeneraDataSection';

export default function App() {
  return (
    <Provider store={store}>
      <PlanningGeneralDataSection />
    </Provider>
  );
}
