import { ComponentProps } from 'react';
import { clsx } from 'clsx';

type SelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
} & ComponentProps<'select'>;

export const Select = ({
  options,
  value,
  onChange,
  className,
  label,
  ...rest
}: SelectProps) => {
  const classesLabel = clsx(
    'block mb-2 text-sm',
    'font-medium',
    'text-gray-900',
    'dark:text-white',
    className
  );
  const classesSelect = clsx(
    'bg-gray-50',
    'border border-gray-300',
    'text-gray-900 text-sm',
    'rounded-full',
    'focus:ring-blue-500 focus:border-blue-500',
    'block w-full p-2.5',
    'dark:bg-gray-700 dark:border-gray-600',
    'dark:placeholder-gray-400 dark:text-white',
    'dark:focus:ring-blue-500 dark:focus:border-blue-500',
    className
  );
  return (
    <div>
      {label && (
        <label htmlFor="countries" className={classesLabel}>
          Select an option
        </label>
      )}
      <select id="countries" className={classesSelect}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
