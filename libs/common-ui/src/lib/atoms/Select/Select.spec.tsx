import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';
import { axe } from 'jest-axe';

describe('Select', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onChange = jest.fn();

  it('should render successfully with given options', () => {
    render(
      <Select options={options} value="" onChange={onChange} id="test-select" />
    );
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('should call onChange when an option is selected', () => {
    render(
      <Select
        options={options}
        value={options[0]}
        onChange={onChange}
        id="test-select"
      />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: options[1] } });
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });

  it('should display the label when provided', () => {
    const label = 'Test Label';
    render(
      <Select
        options={options}
        value=""
        onChange={onChange}
        label={label}
        id="test-select"
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should have the correct class names', () => {
    render(
      <Select
        options={options}
        value=""
        onChange={onChange}
        selectClassName="custom-select-class"
        labelClassName="custom-label-class"
        id="test-select"
        label="Test Label"
      />
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('custom-select-class');
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-label-class');
  });

  it('should pass accessibility test', async () => {
    const { container } = render(
      <Select
        options={options}
        value=""
        onChange={onChange}
        id="test-select"
        label="test-label"
      />
    );
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
