import React from "react";
import "../styles/footer.css";

import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer__container">
      <p>&copy; 2023 Saif. All rights reserved.</p>
      <div className="social__icons">
        <a
          href="https://www.linkedin.com/in/saif-alobaidi-1aa00b210/"
          target="_blank"
        >
          <BsLinkedin />{" "}
        </a>
        <a href="https://github.com/Saifobai" target="_blank">
          <BsGithub />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
