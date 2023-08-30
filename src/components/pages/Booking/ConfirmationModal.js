
const ConfirmationModal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal_confirm" aria-label="Booking Confirmation">
      <div className="modal_content">
        <h2>Thank you for booking a table at Little Lemon!</h2>
        <p>Reservation for {formData.name}</p>
        <p>We reserved a table for {formData.numGuests}</p>
        <p>On {formData.date} at {formData.time}</p>
        <p>We will send a confirmation email to {formData.email}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
