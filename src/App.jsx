// src/App.jsx
import Hero from "./components/2-hero/Hero.jsx";
import Header from "./components/1-header/Header.jsx";
import Main from "./components/3-main/Main.jsx";
import Footer from "./components/5-footer/Footer.jsx";
import Contact from "./components/4-contact/Contact.jsx";
import Automusic from "./components/Automusic.jsx";

export default function App() {
  return (
    <div id="up" className="container  ">
      <Automusic />
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up">
        <button className="icon-keyboard_arrow_up"></button>
      </a>{" "}
    </div>
  );
}
