import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import MainRoute from './Router/MainRoute.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MainRoute} />
    </QueryClientProvider>
  </React.StrictMode>,
)
