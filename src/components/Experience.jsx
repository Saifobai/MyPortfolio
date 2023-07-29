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

      {/* IMAGE */}
      <div className="image-container"></div>

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
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
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
            <p className="card-title">Imaginative</p>
          </div>
          <p className="card-content">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
