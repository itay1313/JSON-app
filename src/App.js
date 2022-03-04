import React, { useState } from "react";
import "./App.scss";
import Movies from "./components/Movies/Movies";
import BoxSource from "./components/Sources/BoxSource";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("dark") === "true") {
      document.body.classList.add("dark");
      return true;
    } else {
      return false;
    }
  });

  const setDarkMode = (x) => {
    localStorage.setItem("dark", x);
    setIsDarkMode(x);
    document.body.classList.toggle("dark");
  };

  const homeData = {
    firstTitle: 'Avengers Movies',
    secondTitle: `Movie Sources`,
  };

  const { firstTitle, secondTitle } = homeData;
  return (
    <>
      <section className="bg-gray flex column">
        <div className="container flex center column">
          <div className="mb-large">
            <div className="line"></div>
            <h1>{firstTitle}</h1>
          </div>
          <div className="movies flex column gap">
            <Movies />
          </div>
        </div>
      </section>
      <section className="flex column">
        <div className="container flex center column">
          <div className="mb-large">
            <div className="line"></div>
            <h2 className="h1">{secondTitle}</h2>
          </div>
          <BoxSource />
          <DarkModeToggle
            onChange={setDarkMode}
            checked={isDarkMode}
            size={80}
            speed={3}
          />
        </div>
      </section>
    </>
  );
}

export default App;
