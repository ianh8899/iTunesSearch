import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test('renders iTunes Search App text', () => {
  render(<App />);
  const textElement = screen.getByText(/iTunes Search App/i);
  expect(textElement).toBeInTheDocument();
});
