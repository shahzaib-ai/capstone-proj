import "../styles/Button.css";
import "../styles/Highlights.css";
import "../styles/Card.css";

import { MdDeliveryDining } from "react-icons/md";

import greeksalad from "../assets/greeksalad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemondessert from "../assets/lemondessert.jpg";

const cardData = [
  {
    src: greeksalad,
    alt: "Greek Salad",
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    src: bruchetta,
    alt: "Bruchetta",
    title: "Bruchetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    src: lemondessert,
    alt: "Lemon Dessert",
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.src} alt={card.alt} className="card__image" />
      <div className="card__flex card__m">
        <h1>{card.title}</h1>
        <span>${card.price}</span>
      </div>
      <p className="card__m">{card.description}</p>
      <span className="card__m card__flex--span">
        Order a delivery <MdDeliveryDining />
      </span>
    </div>
  );
}

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__top">
        <h1>This weeks specials!</h1>
        <div className="highlights__btn">
          <a className="btn" href="#online-menu">
            Online Menu
          </a>
        </div>
      </div>
      <div className="cards">
        {cardData.map((card) => (
          <Card card={card} key={card.src} />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
