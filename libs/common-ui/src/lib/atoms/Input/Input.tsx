import {ChangeEvent, useState} from "react";

type Props = {
  onValueChange: (value: string) => void;
};

export const Input = ({onValueChange}: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
