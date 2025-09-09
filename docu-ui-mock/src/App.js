import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProceedingPage from './pages/proceedingPage/ProceedingPage';
import StoreProvider from './providers/StoreProvider';
import HomePage from './pages/Home';
import DocumentPageSwitch from './pages/docPage/DocumentPageSwitch';
import { Role } from './permissions/permissionsConstants';
import PlanningPage from './pages/planningPage/PlanningPage';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <HomePage />,
  },

  {
    id: 'proceeding',
    path: '/proceeding/:proceedingNr/:planningId',
    element: <ProceedingPage currentRole={Role.Proceeder} />,
  },

  {
    id: 'document',
    path: '/document/:docType/:docNr/:planningId',
    element: <DocumentPageSwitch currentRole={Role.Applicant} />,
  },

  {
    id: 'planning',
    path: '/planning/:planningId',
    element: <PlanningPage />,
  },
]);

export default function App() {
  return (
    <StoreProvider>
      {/* Removed strict mode. Triggers mount-unmount twice otherwise locally */}
      {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </StoreProvider>
  );
}
