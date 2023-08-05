import "../styles/Testimonials.css";
import "../styles/MiniCard.css";

import { RxAvatar } from "react-icons/rx";

const minicardData = [
  { customerName: "Yun", description: "Their Bruchetta is just love." },
  {
    customerName: "Emily",
    description: "I tried their Greek salad and it was actually pretty good.",
  },
  {
    customerName: "Jessica",
    description: "Their Lemon Dessert reminds me of my grandma’s cooking. ",
  },
  {
    customerName: "Luke",
    description: "That grilled bread with Bruchetta is amazing.",
  },
];

function MiniCard({ minicard }) {
  return (
    <div className="mini-card">
      <span>⭐⭐⭐⭐</span>
      <div className="mini-card__container">
        <RxAvatar size={48} />
        <h1> {minicard.customerName} </h1>
      </div>
      <p>{minicard.description}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h1 className="testimonials__title">Testimonials</h1>
      <div className="mini-cards">
        {minicardData.map((minicard) => (
          <MiniCard minicard={minicard} key={minicard.description} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
