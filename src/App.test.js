import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SPORTSEQUIP app', () => {
  render(<App />);
  // Test passes if the app renders without crashing
  const app = screen.getByRole('main');
  expect(app).toBeInTheDocument();
});
