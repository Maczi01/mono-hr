import { RegistrationForm } from './components/RegistrationForm';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <div className="container">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default NxWelcome;
