import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app container', () => {
  render(<App />);
  const appElement = screen.getByRole('main');
  expect(appElement).toBeInTheDocument();
});