import React from "react";
import { motion } from "framer-motion";

import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* MY EXPERIENCE */}
      <motion.div
        className="experience-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="my__experience-title">
          <h1 className="my__experience">
            MY <span className="text-red">Experiences</span>
          </h1>

          <p className="my__experience-p"></p>
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className="cards-container">
        {/* EXPERIENCE */}
        <motion.div
          className="card card-experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="card-header">
            <p className="card-number">01</p>
            <p className="card-title">Experience</p>
          </div>
          <p className="">
            installing the wireless communication systems in the substations and
            400kv stations to connect them with the control center, connect the
            antina that responsible for Internet and wireless system over the
            towers at the stations and maintenace of the these devices.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="card card-innovative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="card-header">
            <p className="card-number">02</p>
            <p className="card-title">Innovative</p>
          </div>
          <p className="card-content">
            In 7 years as an Electronics and Communications Engineer in North
            Iraq, I successfully established wireless connections between the
            control center and distant stations around the city borders,
            overcoming challenging circumstances. Demonstrating adaptability, I
            transitioned into software development swiftly, acquiring valuable
            skills and promptly joining the field with enthusiasm.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="card card-imaginative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="card-header">
            <p className="card-number">03</p>
            <p className="card-title">Visionary</p>
          </div>
          <p className="card-content">
            As a visionary Electronics and Communications Engineer in North
            Iraq, I spearheaded the establishment of wireless connections
            between the control center and distant stations despite challenging
            circumstances. My innate ability to foresee innovative solutions led
            me to swiftly pivot my career direction towards software
            development. Embracing this new path, I quickly acquired skills and
            became a valuable asset in the field, contributing to diverse
            projects with inspired ideas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
