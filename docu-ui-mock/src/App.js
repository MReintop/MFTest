import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProceedingPage from './pages/ProceedingPage';
import DocPage from './pages/DocPage';
import StoreProvider from './providers/StoreProvider';
import HomePage from './pages/Home';

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
    path: '/document/:planningId',
    element: <DocPage />,
  },
]);

export default function App() {
  return (
    <StoreProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </StoreProvider>
  );
}
