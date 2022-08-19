import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignInForm from './SignInForm';

describe('<SignInForm />', () => {
  test('it should mount', () => {
    render(<SignInForm />);
    
    const signInForm = screen.getByTestId('SignInForm');

    expect(signInForm).toBeInTheDocument();
  });
});