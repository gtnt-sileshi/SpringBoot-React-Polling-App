import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { Layout } from './components/Layout';
import ErrorPage from './components/ErrorPage';

import NewClient, { action as newClientAction } from './pages/NewClient';
import Index, { loader as clientsLoader } from './pages/Index';
import EditClient, {
  loader as editClientLoader,
  action as editClientAction,
} from './pages/EditClient';

import { action as deleteClientAction } from './components/Client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users/:userId/edit',
        element: <EditClient />,
        loader: editClientLoader, //get client
        action: editClientAction, //update client
        errorElement: <ErrorPage />,
      },
      {
        path: '/users/:userId/destroy',
        action: deleteClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
