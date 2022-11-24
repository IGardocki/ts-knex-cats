import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// have cat componenet, pass data, and verify that is showed on screen

// dont verify individual data on higher level

// create __tests__ and put all tests into that folder
