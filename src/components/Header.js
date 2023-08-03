import logo from "../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
