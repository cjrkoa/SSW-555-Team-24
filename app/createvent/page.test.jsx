import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddEvent from './page'; // Adjust the import path as necessary

describe('AddEvent', () => {
    // Test if create event screen renders
    it('renders without crashing', () => {
      render(<AddEvent />);
      expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
    });
  });