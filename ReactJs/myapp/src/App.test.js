import { render, screen } from '@testing-library/react';
import App from './App';
import App1 from './TodoIndex';

test('renders learn react link', () => {
  render(<App />);
  render(<App1 />);
  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
