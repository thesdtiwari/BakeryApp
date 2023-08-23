import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Goodies Cookies', () => {
  render(<App />);
  const linkElement = screen.getByText(/Goodies Cookies/i);
  expect(linkElement).toBeInTheDocument();
});
