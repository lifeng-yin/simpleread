import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddReviewForm from './AddReviewForm';

describe('<AddReviewForm />', () => {
  test('it should mount', () => {
    render(<AddReviewForm />);
    
    const addReviewForm = screen.getByTestId('AddReviewForm');

    expect(addReviewForm).toBeInTheDocument();
  });
});