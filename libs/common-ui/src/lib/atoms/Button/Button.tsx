const colors = {
  amethyst: '#9b59b6',
  'peter-river': '#3498db',
  emerald: '#2ecc71',
};

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
};

export const Button = ({ label, bgColor, color }: Props) => {
  const _bgColor = bgColor ? colors[bgColor] : '';
  const _color = color ? colors[color] : '';

  return (
    <button
      style={{
        backgroundColor: _bgColor,
        color: _color,
      }}
    >
      {label}
    </button>
  );
};
