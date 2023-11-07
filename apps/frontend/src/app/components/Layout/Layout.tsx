import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/employee">Employee Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Welcome to Layout!</footer>
    </div>
  );
};
