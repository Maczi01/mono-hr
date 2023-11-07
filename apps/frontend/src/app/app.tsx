import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployeesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ROUTE } from '../routes';
import { ProtectedRoute } from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTE.CONTACT,
        element: <ContactPage />,
      },
      {
        path: ROUTE.REGISTER,
        element: <RegistrationPage />,
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
          <ProtectedRoute>
            <EmployeesPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
