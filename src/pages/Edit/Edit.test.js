import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Edit from './Edit';

describe('<Edit />', () => {
  test('it should mount', () => {
    render(<Edit />);
    
    const edit = screen.getByTestId('Edit');

    expect(edit).toBeInTheDocument();
  });
});