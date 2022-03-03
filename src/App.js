import React from "react";
import "./App.scss";
import Movies from "./components/Movies/Movie";
import BoxSource from "./components/Sources/BoxSource";

function App() {
  return (
    <>
      <section className="bg-gray flex column">
        <div className="container flex center column">
          <div className="mb-large">
            <div className="line"></div>
            <h1>Avengers Movies</h1>
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
            <h1>Avengers Movies</h1>
          </div>
          <BoxSource />

        </div>
      </section>
    </>
  );
}

export default App;
