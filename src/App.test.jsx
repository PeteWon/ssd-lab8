import { render } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  expect(() => render(<App />)).not.toThrow();
});