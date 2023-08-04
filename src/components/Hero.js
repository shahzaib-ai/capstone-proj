import "../styles/Hero.css";
import "../styles/Button.css";
import heroImage from "../assets/restauranfood.jpg";

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
          <a className="btn" href="#reserve-table">
            Reserve a Table
          </a>
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
