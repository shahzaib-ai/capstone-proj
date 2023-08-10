import BookingForm from "./BookingForm";

import Header from "./Header";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="booking-page">
        <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Table Reservation
        </h1>
        <BookingForm />
      </div>
    </>
  );
};

export default BookingPage;
