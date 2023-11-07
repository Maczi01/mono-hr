import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from '../../../routes';

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <footer>Welcome to footer!</footer>
    </div>
  );
};
