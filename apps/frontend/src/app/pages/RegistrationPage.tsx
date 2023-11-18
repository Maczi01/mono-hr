import { RegistrationForm } from '../components/RegistrationForm';
import { UnauthorizedLayout } from '../components/UnauthorizedLayout';

export const RegistrationPage = () => {
  return (
    <UnauthorizedLayout>
      <RegistrationForm />
    </UnauthorizedLayout>
  );
};
