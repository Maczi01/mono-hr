import type { ComponentProps } from 'react';

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
} & ComponentProps<'button'>;

export const Button = ({ label, bgColor, color, ...rest }: ButtonProps) => {
  const _bgColor = bgColor ? colors[bgColor] : '';
  const _color = color ? colors[color] : '';

  return (
    <button
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
