import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployeesPage';
import { ROUTE } from '../routes';

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
        path: ROUTE.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTE.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE.EMPLOYEES,
        element: <EmployeesPage />,
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
