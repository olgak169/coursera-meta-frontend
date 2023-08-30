import React, { useState } from "react";
import Input from "./InputComp";
import useFormLogic from "./formLogic";
import ConfirmationModal from "./ConfirmationModal";

const BookingForm = () => {
  const {
    date,
    time,
    numGuests,
    name,
    email,
    availableTimes,
    errors,
    handleDateChange,
    handleSubmit,
    setTime,
    setNumGuests,
    setName,
    setEmail,
    resetForm,
  } = useFormLogic();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isSubmitted = handleSubmit();

    if (isSubmitted) {
      openModal();
    }
  };
  return (
    <div className="booking_form_container">
      <h2>Book a table</h2>
      <form onSubmit={handleFormSubmit} aria-label="Booking Form">
        <Input
          inputTitle="Date"
          inputId="date"
          isError={errors.date !== undefined}
          errorMessage={errors.date}
        >
          <input
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)}
            aria-labelledby="dateLabel"
          />
        </Input>

        <Input
          inputTitle="Time"
          inputId="time"
          isError={errors.time !== undefined}
          errorMessage={errors.time}
        >
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-labelledby="timeLabel"
          >
            <option value="">Available time:</option>
            {availableTimes.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Input>

        <Input
          inputTitle="Number of guests"
          inputId="numGuests"
          isError={errors.numGuests !== undefined}
          errorMessage={errors.numGuests}
        >
          <input
            aria-labelledby="numGuestsLabel"
            min={1}
            type="number"
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
          />
        </Input>

        <Input
          inputTitle="Name"
          inputId="name"
          isError={errors.name !== undefined}
          errorMessage={errors.name}
        >
          <input
            aria-labelledby="nameLabel"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>

        <Input
          inputTitle="Email"
          inputId="email"
          isError={errors.email !== undefined}
          errorMessage={errors.email}
        >
          <input
            aria-labelledby="emailLabel"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input>

        <button type="submit" aria-label="Submit form">
          Book Now
        </button>
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={{ date, time, numGuests, name, email }}
      />
    </div>
  );
};

export default BookingForm;
