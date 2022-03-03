import React from "react";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      {/* <header className="header">
        <h1>Web Developer Interview Exercise</h1>
      </header> */}
      {/* Your code starts here */}
      <section>
        <div className="line"></div>
        <h1>Avengers movies</h1>
        <div className="movies">
          <div className="movie">
            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Avengers: Endgame" />
            <h2>Avengers: Endgame</h2>
            <p>
              As the Avengers and their allies have continued to protect the world from
              threats too large for any one hero to handle, a new danger has emerged
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
