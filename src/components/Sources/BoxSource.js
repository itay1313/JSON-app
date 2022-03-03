import React from "react";
import "./BoxSource.scss";
import Button from "../Button/Button";
import ButtonWebsite from "../Button/ButtonWebsite";
import MoviesSourcesJson from "../../json/movie_sources.json";

function BoxSource() {
  const DisplayBoxSourceData = MoviesSourcesJson.map(
    (source) => {
      return (
        <div className="BoxSource-wrapper flex">
          <div className="BoxSource flex column">
            <h5>{source.name}</h5>
            <div className="flex column gap">
              <p>
                {source.summary}
              </p>
              <div className="gap flex center">
                <a href={source.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ButtonWebsite buttonTitle="Website" />
                </a>
                <a href={source.wikiUrl} target="_blank" rel="noopener noreferrer">
                  <Button buttonTitle="Wiki" />
                </a>
              </div>
            </div>
          </div>
        </div >
      )
    }
  )

  return (
    <div className="sources flex gap">
      {DisplayBoxSourceData}
    </div>
  )
}


export default BoxSource;