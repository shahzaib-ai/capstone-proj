import { useState } from "react";

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const clearForm = () => {
    setDate("");
    setTime(availableTimes[0]);
    setGuests("1");
    setOccasion("Birthday");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your reservation has been made");
    clearForm();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setAvailableTimes({ date: e.target.value });
            setDate(e.target.value);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          id="res-time"
        >
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" defaultValue="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
