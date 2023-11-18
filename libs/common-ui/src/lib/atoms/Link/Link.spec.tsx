import { fireEvent, render, screen } from '@testing-library/react';
import { Link } from './Link';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

type LinkProps = {
  icon?: JSX.Element;
  onClick?: jest.Mock;
};

describe('Link', () => {
  const testTitle = 'Test Title';
  const testPath = '/test';

  const renderLink = (props: LinkProps) => {
    return render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<Link to={testPath} title={testTitle} {...props} />}
          />
          <Route path={testPath} element={<div>Navigation Success</div>} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('should display the title', () => {
    renderLink({});
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('should navigate to the specified path when clicked', () => {
    renderLink({});
    fireEvent.click(screen.getByText(testTitle));
    expect(screen.getByText('Navigation Success')).toBeInTheDocument();
  });

  it('should display an icon if provided', () => {
    const Icon = <span>Test Icon</span>;
    renderLink({ icon: Icon });
    expect(screen.getByText('Test Icon')).toBeInTheDocument();
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderLink({ onClick: handleClick });
    fireEvent.click(screen.getByText(testTitle));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply the active class when on the active path', () => {
    const activeClass = 'active';
    render(
      <MemoryRouter initialEntries={[testPath]}>
        <Routes>
          <Route
            path={testPath}
            element={
              <Link to={testPath} title={testTitle} activeClass={activeClass} />
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = screen.getByText(testTitle).closest('a');
    expect(linkElement).toHaveClass(activeClass);
  });
});
