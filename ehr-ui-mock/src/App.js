import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProceedingPageWrapper from './pages/ProceedingPageWrapper';
import DocPageWrapper from './pages/DocPageWrapper';
import ReduxProvider from './providers/StoreProvider';
import PlanningPageWrapper from './pages/PlanningPageWrapper';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <HomePage />,
  },

  {
    id: 'proceeding',
    path: '/proceeding/:proceedingNr/:planningId?',
    element: <ProceedingPageWrapper />,
  },

  {
    id: 'planning',
    path: '/planning/:planningId',
    element: <PlanningPageWrapper />,
  },

  {
    id: 'document',
    // planning optional
    path: '/document/:docType/:docNr/:planningId?',
    element: <DocPageWrapper />,
  },
]);

export default function App() {
  return (
    <>
      <ReduxProvider>
        {/* Removed strict mode. Triggers mount-unmount twice otherwise locally */}
        {/* <React.StrictMode> */}
        <RouterProvider router={router} />
        {/* </React.StrictMode> */}
      </ReduxProvider>
    </>
  );
}
