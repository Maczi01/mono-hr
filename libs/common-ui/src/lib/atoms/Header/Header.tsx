import type { ComponentProps } from 'react';

type HeaderProps = {
  children: string | undefined;
};

export const Header = ({
  children,
}: ComponentProps<'header'> & HeaderProps) => {
  return <header className="text-3xl font-bold">{children}</header>;
};
