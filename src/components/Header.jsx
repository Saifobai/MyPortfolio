import React from "react";
import img1 from "../assets/space1.png";
import "../styles/header.css";

const Haeder = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__text__container">
          <div className="header__text">
            <h1 className="just__title">
              Dream. Work. <br /> Achieve.
            </h1>
            <h3 className="text-light">
              Electronics Eng & Full-Stack Developer
            </h3>
          </div>
          <a href="#contact" className="btn btn-primary btn__talk">
            Lets Talk
          </a>
        </div>

        <div className="me">
          <img src={img1} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Haeder;
