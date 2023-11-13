import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { axe } from 'jest-axe';

describe('Header', () => {
  it('should display children content correctly', () => {
    render(<Header>Unique Content</Header>);
    expect(screen.getByText('Unique Content')).toBeInTheDocument();
  });

  it('should have the correct class name', () => {
    render(<Header>Test Header</Header>);
    const header = screen.getByText('Test Header');
    expect(header).toHaveClass('text-3xl font-bold');
  });

  it('should pass accessibility test', async () => {
    const { container } = render(<Header>Accessible Header</Header>);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
