import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar'; // Adjust the import path as necessary

describe('Navbar', () => {
    // Test if Navbar component renders
    it('renders without crashing', () => {
      render(<Navbar />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  
    // Check if the logo text is correct
    it('renders the correct brand name', () => {
      render(<Navbar />);
      expect(screen.getByText('SHAREVENT')).toBeInTheDocument();
    });
  
    // Check if primary navigation links are present
    it('renders primary nav links', () => {
      render(<Navbar />);
      expect(screen.getByText('Find Event')).toHaveAttribute('href', '/findevent');
      expect(screen.getByText('Create Event')).toHaveAttribute('href', '/createvent');
    });
  
    // Check if secondary navigation links are present
    it('renders secondary nav links', () => {
      render(<Navbar />);
      expect(screen.getByText('Sign In')).toHaveAttribute('href', '/signin');
      const signUpLink = screen.getByText('Sign Up');
      expect(signUpLink).toHaveAttribute('href', '/signup');

      expect(signUpLink).toHaveClass('bg-yellow-200 rounded hover:bg-yellow-300 hover:text-black transition duration-300');
    });
  });