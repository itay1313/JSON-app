import React, { useState } from "react";
import "./Movie.scss";
import movieIcon from '../../video.svg';
import Button from "../Button/Button";
import MoviesJson from "../../json/movies.json";

function Movies() {
  const [hidden, setHidden] = useState(true);
  const DisplayData = MoviesJson.map(
    (movie) => {
      return (
        <div className="movie-wrapper flex">
          <div className="movie-icon">
            <img width="70" src={movieIcon} alt="movieIcon" />
          </div>
          <div className="movie flex column">
            <h5>{movie.title}</h5>
            <div className="flex mobile-col gap-l">
              <p>
                {movie.summary}
              </p>
              <div className="ml-auto gap flex center">
                <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
                  <Button buttonTitle="IMDB" />
                </a>

                <svg onClick={() => setHidden(s => !s)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--secondary-color)"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
              </div>
            </div>
            {/* more info */}
            {!hidden ? (<div className="movie-moreinfo flex column gap">
              <ul className="movie-casts flex wrap gap between">

                {movie.casts.map((cast) => {
                  return (
                    <li>{cast}</li>
                  )
                }
                )}
              </ul>
              <a href={movie.fullCastUrl}>
                See Full Cast
              </a>
            </div>) : null}
          </div>
        </div>
      )
    }
  )

  return (
    <div className="movies flex column gap">
      {DisplayData}
    </div>
  )
}


export default Movies;