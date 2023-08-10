import "../styles/Hero.css";
import "../styles/Button.css";
import heroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="btn" to="/reserve-table">
            Reserve a Table
          </Link>
        </div>
        <img
          className="hero__image"
          src={heroImage}
          alt="Person holding dish with food."
        />
      </div>
    </section>
  );
}

export default Hero;
