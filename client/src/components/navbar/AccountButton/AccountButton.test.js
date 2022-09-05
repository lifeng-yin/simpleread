import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountButton from './AccountButton';

describe('<AccountButton />', () => {
  test('it should mount', () => {
    render(<AccountButton />);
    
    const accountButton = screen.getByTestId('AccountButton');

    expect(accountButton).toBeInTheDocument();
  });
});