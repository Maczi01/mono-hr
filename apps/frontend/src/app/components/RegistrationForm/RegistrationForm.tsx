import { Button, Input } from '@ems/common-ui';
import { FormEventHandler, useRef } from 'react';

export const RegistrationForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('First name: ', firstNameRef.current?.value);
    console.log('Last name: ', lastNameRef.current?.value);
    console.log('Age: ', ageRef.current?.value);
  };

  return (
    <>
      <div>
        <span>User age: {}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <Input id="firstName" label="First name" ref={firstNameRef} />
        <Input id="lastName" label="Last name" ref={lastNameRef} />
        <Input id="age" label="Age" ref={ageRef} type="number" />
        <Button type="submit" label="Submit"></Button>
      </form>
    </>
  );
};
