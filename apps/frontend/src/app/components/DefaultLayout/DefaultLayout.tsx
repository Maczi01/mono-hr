import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Aside } from './Aside';

export const DefaultLayout = () => {
  return (
    <div>
      <Aside />
      {/*<div className="sm:ml-64">*/}
      <Menu />
      <Outlet />
      <Footer />
      {/*</div>*/}
    </div>
  );
};
