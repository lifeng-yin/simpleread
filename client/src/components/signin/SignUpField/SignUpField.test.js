import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignInField from './SignInField';

describe('<SignInField />', () => {
  test('it should mount', () => {
    render(<SignInField />);
    
    const signInField = screen.getByTestId('SignInField');

    expect(signInField).toBeInTheDocument();
  });
});