import { NavLink as ReactLink, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

type LinkProps = {
  to: string;
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  activeClass?: string;
};

export const Link = ({
  to,
  icon,
  title,
  onClick,
  className,
  activeClass,
}: LinkProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;
  const linkClasses = className
    ? clsx(className, { [activeClass || '']: isActive })
    : clsx(
        'flex items-center p-2 text-blue-600 dark:text-blue-500 hover:underline group',
        { [activeClass || '']: isActive }
      );

  return (
    <ReactLink to={to} className={linkClasses} onClick={onClick}>
      {icon && <span className="icon-container">{icon}</span>}
      <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
    </ReactLink>
  );
};
