import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import { axe } from 'jest-axe';

describe('Input', () => {
  it('should display the label when provided', () => {
    const label = 'Test Label';
    render(<Input label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should accept and display input value', () => {
    const testValue = 'Test Value';
    render(<Input value={testValue} />);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  it('should have the correct class name', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(
      'peer h-10 w-full bg-gray-50 px-4 rounded-full border border-blue-200 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out'
    );
  });

  it('should display helper text when provided', () => {
    const helperText = 'Test Helper Text';
    render(<Input helperText={helperText} />);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('should call onChange handler when input is changed', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should pass accessibility test', async () => {
    const { container } = render(<Input label={'label'} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
