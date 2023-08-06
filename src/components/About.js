import "../styles/About.css";

import aboutImage from "../assets/marioandadrianb.jpg";
import aboutImage2 from "../assets/restaurantchefb.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="about__images">
        <img
          className="about__images--img"
          src={aboutImage}
          alt="Two chefs smiling"
        />
        <img
          className="about__images--img2"
          src={aboutImage2}
          alt="A chef sprinkling ingredients on a dish"
        />
      </div>
    </section>
  );
}

export default About;
