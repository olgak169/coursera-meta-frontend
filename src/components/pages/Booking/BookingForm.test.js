import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('submits the form with valid data', () => {
    const handleFormSubmit = jest.fn();
    const closeModal = jest.fn();

    const { getByLabelText, getByText } = render(<BookingForm handleFormSubmit={handleFormSubmit} />);

    fireEvent.change(getByLabelText('Date'), { target: { value: '2023-09-01' } });
    fireEvent.change(getByLabelText('Time'), { target: { value: '18:30' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: 4 } });
    fireEvent.change(getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'johndoe@example.com' } });

    fireEvent.click(getByText('Book Now'));

    expect(handleFormSubmit).toHaveBeenCalledWith({
      date: '2023-09-01',
      time: '18:30',
      numGuests: 4,
      name: 'John',
      email: 'johndoe@example.com'
    });
    expect(closeModal).toHaveBeenCalled();
  });

  it('displays error messages for invalid data', () => {
    const { getByText } = render(<BookingForm />);

    fireEvent.click(getByText('Book Now'));

    expect(getByText('Please select a date')).toBeInTheDocument();
    expect(getByText('Please select a time')).toBeInTheDocument();
    expect(getByText('Please enter the number of guests')).toBeInTheDocument();
    expect(getByText('Please enter your name')).toBeInTheDocument();
    expect(getByText('Please enter a valid email address')).toBeInTheDocument();
  });


});
