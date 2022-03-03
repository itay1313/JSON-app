import React from "react";
import "./Buttons.scss";

const Button = ({ link }) => {
  return (
    <div class="wrapper">
      <a href="https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0" target="_blank" rel="noopener noreferrer">
        <button class="button">
          <span class="button__mask"></span>
          <span class="button__text h5">IMDB</span>
          <span class="button__text button__text--bis">IMDB</span>
        </button>
      </a>
    </div>
  );
}
export default Button;

