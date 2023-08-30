import BookingForm from "./BookingForm";

const Booking = () => {
  return (
    <>
      <section className="hero hero_booking">
        <div className="container">
          <div className="hero__content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>Table reservation</h3>
          </div>
        </div>
      </section>
      <BookingForm />
    </>
  );
};

export default Booking;
