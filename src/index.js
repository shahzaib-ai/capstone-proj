import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import BookingPage from "./components/BookingPage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/menu" element={<h1>Menu</h1>}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/order-online" element={<h1>Order Online</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/reserve-table" element={<BookingPage />}></Route>
        <Route path="/online-menu" element={<h1>Online Menu</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
