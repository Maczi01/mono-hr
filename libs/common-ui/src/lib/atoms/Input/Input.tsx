import { ChangeEvent, forwardRef, useEffect, useId, useState } from 'react';
import type { ComponentProps, ChangeEventHandler, Ref } from 'react';
import { clsx } from 'clsx';
import { Label } from '../Label';

type InputProps = {
  label?: string;
  value?: string;
  className?: string;
  helperText?: string;
} & ComponentProps<'input'>;

export const Input = forwardRef(
  (
    { label, value, className, helperText, onChange, ...rest }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();

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
        {label && <Label id={id}>{label}</Label>}
        <input
          ref={ref}
          className={classesInput}
          type="text"
          id={id}
          defaultValue={value}
          onChange={onChange}
          {...rest}
        />
        {helperText && <span className={classesHelperText}>{helperText}</span>}
      </div>
    );
  }
);
