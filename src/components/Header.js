import logo from "../assets/Logo.svg";
import "../styles/Header.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function Header() {
  const mobNavHandler = () => {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.toggle("main-nav--visible");
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <div className="hamburger" onClick={mobNavHandler}>
        <FontAwesomeIcon size="xl" icon={faBars} />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
