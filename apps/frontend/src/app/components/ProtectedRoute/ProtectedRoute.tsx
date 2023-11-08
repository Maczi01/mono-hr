import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../../routes';

type Props = {
  user?: boolean;
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children, user = false }: Props) => {
  if (user) {
    return children;
  }

  return <Navigate to="/register" />;
};
