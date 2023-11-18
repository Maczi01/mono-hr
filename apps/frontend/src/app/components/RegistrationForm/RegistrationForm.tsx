import { Button, Input } from '@ems/common-ui';
import { FormEventHandler, useRef } from 'react';
import { navigate } from '@storybook/addon-links';
import { ROUTE } from '../../../utulities/routes';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('First name: ', firstNameRef.current?.value);
    console.log('Last name: ', lastNameRef.current?.value);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <Input id="email" label="E-mail" ref={firstNameRef} />
        <Input id="password" label="Password" ref={lastNameRef} />
        <div className="m-4">
          <Button type="submit" label="Submit"></Button>
        </div>
      </div>
    </form>
  );
};
