import React from "react";
import "./App.css";
import Movies from "./components/Movie/Movie";

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
            <h1>Movice sources</h1>
            <div className="movie-sources flex mobile-col gap">
              sdsds
              <div>ddd</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
