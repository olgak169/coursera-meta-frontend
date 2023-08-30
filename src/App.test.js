import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders Home component for the home route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeText = getByText('Little Lemon');
    expect(homeText).toBeInTheDocument();
  });

  it('renders ComingSoon component for unknown routes', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    const comingSoonText = getByText('Coming soon!');
    expect(comingSoonText).toBeInTheDocument();
  });
});