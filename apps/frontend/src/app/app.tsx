import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './components/DefaultLayout';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployeesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ROUTE } from '../utulities/routes';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState } from 'react';

export function App() {
  const [user] = useState(true);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: ROUTE.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTE.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE.EMPLOYEES,
          element: (
            <ProtectedRoute user={user}>
              <EmployeesPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: ROUTE.REGISTER,
      element: <RegistrationPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
