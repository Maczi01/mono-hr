import { ComponentProps } from 'react';
import { clsx } from 'clsx';

type SelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  selectClassName?: string;
  labelClassName?: string;
  label: string;
  id: string;
} & Omit<ComponentProps<'select'>, 'value' | 'onChange'>;

export const Select = ({
  options,
  value,
  onChange,
  selectClassName,
  labelClassName,
  label,
  id,
  ...rest
}: SelectProps) => {
  const classesLabel = clsx(
    'block mb-2 text-sm',
    'font-medium',
    'text-gray-900',
    'dark:text-white',
    labelClassName
  );
  const classesSelect = clsx(
    'bg-gray-50',
    'border border-gray-300',
    'text-gray-900 text-sm',
    'rounded-full',
    'focus:ring-blue-500 focus:border-blue-500',
    'block w-full p-2 my-2',
    'dark:bg-gray-700 dark:border-gray-600',
    'dark:placeholder-gray-400 dark:text-white',
    'dark:focus:ring-blue-500 dark:focus:border-blue-500',
    selectClassName
  );
  return (
    <div>
      {label && (
        <label htmlFor={id} className={classesLabel}>
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classesSelect}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
