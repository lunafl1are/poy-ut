import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Payees/i);
  expect(linkElement).toBeInTheDocument();
});

test('basic math', () => {
  expect(2 + 2).toBe(4);
})
