import React from "react";
import "./ButtonWebsite.scss";

const ButtonsWebsite = ({ buttonTitle }) => {
  return (
    <button className="ButtonsWebsite">
      <span className="ButtonsWebsite__mask"></span>
      <span className="ButtonsWebsite__text h5">{buttonTitle}</span>
      <span className="ButtonsWebsite__text ButtonsWebsite__text--bis">{buttonTitle}</span>
    </button>
  );
}
export default ButtonsWebsite;

