import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { clsx } from 'clsx';

type InputProps = {
  onValueChange: (value: string) => void;
  id: string;
  label?: string;
  value?: string;
  className?: string;
  helperText?: string;
} & Omit<React.ComponentProps<'input'>, 'onChange' | 'value'>;

export const Input = ({
  onValueChange,
  id,
  label,
  value,
  className,
  helperText,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
    onValueChange(event.target.value);
  };

  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const classesLabel = clsx(
    'block w-full',
    'pb-1',
    'text-sm font-medium text-gray-500',
    'transition-all duration-200 ease-in-out',
    'group-focus-within:text-blue-400',
    className
  );

  const classesInput = clsx(
    'peer h-10 w-full',
    'bg-gray-50',
    'px-4',
    'rounded-full border border-blue-200',
    'font-thin outline-none drop-shadow-sm',
    'transition-all duration-200',
    'ease-in-out',
    'focus:bg-white focus:ring-2 focus:ring-blue-400',
    className
  );
  const classesHelperText = clsx(
    'absolute',
    'block',
    'pt-1',
    'text-xs font-semibold text-gray-500',
    'opacity-0',
    'transition-all duration-200',
    'ease-in-out',
    'group-focus-within:opacity-100',
    className
  );

  return (
    <div className="group relative w-72 md:w-80 lg:w-96">
      {label && (
        <label className={classesLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={classesInput}
        type="text"
        id={id}
        value={inputValue}
        onChange={handleInputChange}
        {...rest}
      />
      {helperText && <span className={classesHelperText}>{helperText}</span>}
    </div>
  );
};
