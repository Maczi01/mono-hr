import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from '../../../routes';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="flex list-none">
          <li className="mx-2">
            <Link to={ROUTE.HOME}>Home Page</Link>
          </li>
          <li className="mx-2">
            <Link to={ROUTE.CONTACT}>Contact Page</Link>
          </li>
          <li className="mx-2">
            <Link to={ROUTE.ABOUT}>About Page</Link>
          </li>
          <li className="mx-2">
            <Link to={ROUTE.EMPLOYEES}>Employee Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Welcome to footer!</footer>
    </div>
  );
};
