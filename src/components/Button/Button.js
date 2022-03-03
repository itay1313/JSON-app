import React from "react";
import "./Buttons.scss";

const Button = ({ buttonTitle }) => {
  return (
    <button class="button">
      <span class="button__mask"></span>
      <span class="button__text h5">{buttonTitle}</span>
      <span class="button__text button__text--bis">{buttonTitle}</span>
    </button>
  );
}
export default Button;

