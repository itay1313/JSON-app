import React from "react";
import "./Buttons.scss";

const Button = ({ buttonTitle }) => {
  return (
    <button className="button">
      <span className="button__mask"></span>
      <span className="button__text h5">{buttonTitle}</span>
      <span className="button__text button__text--bis">{buttonTitle}</span>
    </button>
  );
}
export default Button;

