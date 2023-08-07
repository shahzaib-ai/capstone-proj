import "../styles/Footer.css";

import footerLogo from "../assets/footerlogo.png";

function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={footerLogo} alt="Little lemon logo" />
      </div>
      <div className="footer__sitemap">
        <h1>Sitemap</h1>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/reservations">Reservations</a>
        <a href="/order-online">Order Online</a>
        <a href="/login">Login</a>
      </div>
      <div className="footer__contact">
        <h1>Contact</h1>
        <p>+1 234 567 78</p>
        <p>help@littlelemon.com</p>
      </div>
      <div className="footer__location">
        <h1>Location</h1>
        <p>23 Street, New York</p>
      </div>
    </footer>
  );
}

export default Footer;
