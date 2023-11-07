import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>Welcome to Layout!</nav>
      <Outlet />
      <footer>Welcome to Layout!</footer>
    </div>
  );
};
