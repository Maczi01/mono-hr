import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { axe } from 'jest-axe';

describe('Label', () => {
  it('should have the correct class name', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label.parentNode).toHaveClass(
      'block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out'
    );
  });

  it('should apply custom className if provided', () => {
    const customClass = 'custom-class';
    render(<Label className={customClass}>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label.parentNode).toHaveClass(customClass);
  });

  it('should associate the label with the correct input element', () => {
    const testId = 'test-input';
    render(
      <>
        <Label id={testId}>Test Label</Label>
        <input id={testId} />
      </>
    );
    const label = screen.getByText('Test Label');
    expect(label.parentNode).toHaveAttribute('for', testId);
  });

  it('should pass accessibility test', async () => {
    const { container } = render(<Label>Accessible Label</Label>);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
