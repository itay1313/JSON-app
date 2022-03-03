import React from "react";
import "./ButtonWebsite.scss";

const ButtonsWebsite = ({ buttonTitle }) => {
  return (
    <button class="ButtonsWebsite">
      <span class="ButtonsWebsite__mask"></span>
      <span class="ButtonsWebsite__text h5">{buttonTitle}</span>
      <span class="ButtonsWebsite__text ButtonsWebsite__text--bis">{buttonTitle}</span>
    </button>
  );
}
export default ButtonsWebsite;

