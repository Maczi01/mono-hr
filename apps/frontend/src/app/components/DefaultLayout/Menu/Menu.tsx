import { Link } from 'react-router-dom';
import { ROUTE } from '../../../../utulities/routes';
import logo from './logo.svg';
import exit from './exit.svg';

export const Menu = () => {
  return (
    <nav className="bg-amber-400">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-8 py-2">
        <div className="flex items-center">
          <img src={logo} alt="Logout" style={{ width: '40px' }} />
          <ul className="flex justify-between list-none ml-4">
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
            <li className="mx-2">
              <Link to={ROUTE.REGISTER}>Registration Page</Link>
            </li>
          </ul>
        </div>

        <div>
          <img src={exit} alt="Logout" style={{ width: '40px' }} />
        </div>
      </div>
    </nav>
  );
};
