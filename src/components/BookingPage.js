import BookingForm from "./BookingForm";
import Header from "./Header";

import { useReducer } from "react";

const BookingPage = () => {
  const updateTimes = (state, action) => {
    console.log(action.date);
    if (action.date === "2023-08-14") {
      return ["19:00", "20:00", "21:00", "22:00"];
    }
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  return (
    <>
      <Header />
      <div className="booking-page">
        <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Table Reservation
        </h1>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>
    </>
  );
};

export default BookingPage;
