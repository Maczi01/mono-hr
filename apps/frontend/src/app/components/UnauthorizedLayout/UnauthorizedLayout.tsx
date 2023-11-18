import { ReactNode } from 'react';

type UnauthorizedLayoutProps = {
  children: ReactNode;
};

export const UnauthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
};
