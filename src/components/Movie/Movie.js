import React from "react";
import "./Movie.scss";
import movieIcon from '../../video.svg';
import Button from "../Button/Button";
import MoviesJson from "../../json/movies.json";

function Movies() {
  const DisplayData = MoviesJson.map(
    (movie) => {
      return (
        <div className="movie-wrapper flex">
          <div className="movie-icon">
            <img width="70" src={movieIcon} alt="movieIcon" />
          </div>
          <div className="movie flex column gap">
            <h5>{movie.title}</h5>
            <div className="flex mobile-col gap-l">
              <p>
                {movie.summary}
              </p>
              <div className="ml-auto gap flex center">
                <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
                  <Button />
                </a>
                <span>s</span>
              </div>
            </div>

            {/* more info */}
            <div className="movie-moreinfo flex column gap">
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
            </div>
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