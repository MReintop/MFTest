import React from 'react';
import { Provider } from 'react-redux';
import RandomTable from './components/RandomTable';
import { store } from './store';
import PlanningGeneralDataSection from './features/planningDataFeatures/planningGeneralDataSection/PlanningGeneraDataSection';

export default function App() {
  return (
    <Provider store={store}>
      <RandomTable />
      <PlanningGeneralDataSection />
    </Provider>
  );
}
