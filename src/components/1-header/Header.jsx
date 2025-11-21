import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-bars flex"
        aria-label="Open menu"
      />

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#speaking">Speaking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="mode flex"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <span className="icon-sun" />
        ) : (
          <span className="icon-moon" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cross"
                onClick={() => setShowModal(false)}
                aria-label="Close menu"
              />
            </li>
            <li>
              <a href="#about" onClick={() => setShowModal(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#articles" onClick={() => setShowModal(false)}>
                Articles
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#speaking" onClick={() => setShowModal(false)}>
                Speaking
              </a>
            </li>
            <li>
              <a href="#uses" onClick={() => setShowModal(false)}>
                Uses
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
