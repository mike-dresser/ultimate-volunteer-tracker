import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VolunteerForm from './VolunteerForm.jsx';

function Main() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [{ path: '/volunteer_form', element: <VolunteerForm /> }],
    },
    ,
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
