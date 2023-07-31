import React from "react";
import img2 from "../assets/second.png";
import { FaAward, FaUser } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "../styles/about.css";
const About = () => {
  return (
    <section id="about">
      <h5 className="about-h5">Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Eperience</h5>
              <small>7 as an Engineer&2 1.5 as software developer</small>
            </article>

            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Client</h5>
              <small>more then 50 locations</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>10+Completed</h5>
              <small></small>
            </article>
          </div>
          <p>
            I have 7 years of experience as an Electronics and Communications
            Engineer in North Iraq, working on diverse projects. Additionally, I
            spent 1.5 years as a Software Developer in Germany, gaining
            expertise in programming and software development. I am passionate
            about innovation and seek new opportunities to leverage my unique
            skill set in both electronics and software. I thrive in dynamic
            environments and enjoy tackling challenging problems. Ready to
            contribute to exciting projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
