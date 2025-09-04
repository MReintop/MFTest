import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProceedingPage from './pages/proceedingPage/ProceedingPage';
import StoreProvider from './providers/StoreProvider';
import HomePage from './pages/Home';
import DocumentPageSwitch from './pages/docPage/DocumentPageSwitch';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <HomePage />,
  },

  {
    id: 'proceeding',
    path: '/proceeding/:proceedingNr/:planningId',
    element: <ProceedingPage />,
  },

  {
    id: 'document',
    path: '/document/:docType/:docNr/:planningId',
    element: <DocumentPageSwitch />,
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
