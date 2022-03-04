import React, { useState } from "react"
import "./Movies.scss"
import movieIcon from "../../assets/video.svg"
import Button from "../Button/Button"

function Movies(movie) {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className="movie-wrapper flex">
      <div className="movie-icon">
        <img width="70" src={movieIcon} alt="movieIcon" />
      </div>
      <div className="movie flex column">
        <h5>{movie.title}</h5>
        <div className="flex mobile-col gap-l">
          <p>{movie.summary}</p>
          <div className="gap flex center">
            <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
              <Button buttonTitle="IMDB" />
            </a>
            <button onClick={() => setIsActive(!isActive)}>
              <div>{isActive ? <svg style={{ transform: 'rotate(180deg)' }}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="var(--secondary-color)"
                className="movie-icon-button"
              >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                <path className="pathPrimary" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
              </svg> : <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="var(--secondary-color)"
                className="movie-icon-button"
              >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                <path className="pathPrimary" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
              </svg>}</div>

            </button>
          </div>
        </div>
        {/* more info */}
        {isActive && <div className="movie-moreinfo flex column gap">
          <ul className="movie-casts flex wrap gap between">
            {movie.casts.map((cast) => {
              return <li>{cast}</li>
            })}
          </ul>
          <a href={movie.fullCastUrl}>See Full Cast</a>
        </div>}
      </div>
    </div>
  )

}

export default Movies
