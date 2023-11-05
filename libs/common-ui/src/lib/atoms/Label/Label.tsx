import { ComponentProps } from 'react';
import { clsx } from 'clsx';

type LabelProps = {
  children: string;
  className?: string;
} & ComponentProps<'label'>;

export const Label = ({ id, children, className }: LabelProps) => {
  const classesLabel = clsx(
    'block w-full',
    'pb-1',
    'text-sm font-medium text-gray-500',
    'transition-all duration-200 ease-in-out',
    'group-focus-within:text-blue-400',
    className
  );

  return (
    <label className={classesLabel} htmlFor={id}>
      <span>{children}</span>
    </label>
  );
};
