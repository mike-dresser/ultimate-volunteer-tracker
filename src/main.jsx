import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from 'react-router-dom';
import VolunteerForm from './VolunteerForm.jsx';
import VolunteerDetails from './VolunteerDetails.jsx';
import VolunteerGrid from './VolunteerGrid.jsx';

function Main() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/form', element: <VolunteerForm /> },
        { path: '/volunteer/:id', element: <VolunteerDetails /> },
        { path: '/', element: <VolunteerGrid />}
      ],
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
