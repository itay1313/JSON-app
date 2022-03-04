import React from "react"
import MovieDiv from "./MovieDiv"
import "./Movies.scss"
import MoviesJson from "../../json/movies.json"

function Movies() {


  return (
    <>
      {MoviesJson.map(({ title, summary, casts, imdbUrl, fullCastUrl }) => (
        <MovieDiv title={title} summary={summary} casts={casts} imdbUrl={imdbUrl} fullCastUrl={fullCastUrl} />
      ))}
    </>
  )
}

export default Movies
