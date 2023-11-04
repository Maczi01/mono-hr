import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

const colors = {
  amethyst: '#9b59b6',
  'peter-river': '#3498db',
  emerald: '#2ecc71',
};

type ColorType = keyof typeof colors;

type ButtonProps = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
  className?: string;
} & ComponentProps<'button'>;

export const Button = ({
  label,
  bgColor,
  color,
  className,
  ...rest
}: ButtonProps) => {
  const _bgColor = bgColor ? colors[bgColor] : '';
  const _color = color ? colors[color] : '';

  const classes = clsx(
    'px-4 py-1',
    'text-sm text-white',
    'bg-blue-600',
    'font-semibold',
    'rounded-full border border-blue-200',
    'hover:bg-blue-700 hover:border-transparent hover:text-white',
    className
  );

  return (
    <button
      className={classes}
      style={{
        backgroundColor: _bgColor,
        color: _color,
      }}
      {...rest}
    >
      {label}
    </button>
  );
};
