import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';
import { axe } from 'jest-axe';

const colors = {
  amethyst: '#9b59b6',
  'peter-river': '#3498db',
  emerald: '#2ecc71',
};

describe('Button', () => {
  it('should apply background and text colors correctly', () => {
    const { rerender } = render(
      <Button label="Test" bgColor="emerald" color="amethyst" />
    );
    const button = screen.getByText('Test');

    expect(button).toHaveStyle({
      backgroundColor: colors.emerald,
      color: colors.amethyst,
    });

    rerender(<Button label="Test" bgColor="peter-river" />);
    expect(button).toHaveStyle({ backgroundColor: colors['peter-river'] });

    rerender(<Button label="Test" color="peter-river" />);
    expect(button).toHaveStyle({ color: colors['peter-river'] });
  });

  it('should have default classes', () => {
    render(<Button label="Test" />);
    const button = screen.getByText('Test');
    expect(button).toHaveClass(
      'px-4 py-1 text-sm text-white bg-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-700 hover:border-transparent hover:text-white'
    );
  });

  it('should allow additional classes to be applied', () => {
    render(<Button label="Test" className="extra-class" />);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('extra-class');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('should pass accessibility test', async () => {
    const { container } = render(<Button label="Test" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  it('should pass correct parameters on click', () => {
    const handleClick = jest.fn();
    const buttonId = 123;
    render(<Button label="Click me" onClick={() => handleClick(buttonId)} />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(buttonId);
  });
});
