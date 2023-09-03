import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

// for making form UI in your proj
//  https://ui.shadcn.com/

function App() {
  useEffect(() => console.log(process.env.NODE_ENV), []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
