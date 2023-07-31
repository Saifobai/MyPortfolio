import React, { useState } from "react";
import img1 from "../assets/gallAll.png";
import img2 from "../assets/gallReact1.png";
import img3 from "../assets/gallAngular.png";
import img4 from "../assets/gallArduino.png";
import "../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    name: "All projects",
    category: "All",
    image: img1, // Replace with actual image paths
  },

  {
    name: "Resistors Calculator",
    category: "reactprojects",
    image: img2,
    liveDemo: "https://resistors-calculators.netlify.app/",
    gitHub: "https://github.com/Saifobai/OhmLawReactjs",
  },

  {
    name: "Don't Pay",
    category: "reactprojects",
    image: img2,
    liveDemo: "https://github.com/Saifobai/Don-tPay",
    gitHub: "https://github.com/Saifobai/Don-tPay",
  },

  {
    name: "Ang-Res-Calculator",
    category: "angularprojects",
    image: img3,
    liveDemo: "https://ohm-law-angular.vercel.app/",
    gitHub: "https://github.com/Saifobai/OhmLawAngular",
  },

  {
    name: "Ang-E-Shop",
    category: "angularprojects",
    image: img3,
    liveDemo: "https://angular-e-shop.vercel.app/",
    gitHub: "https://github.com/Saifobai/Angular-E-Shop",
  },

  {
    name: "COMING SOON",
    category: "arduinoprojects",
    image: img4,
  },

  // Add more projects as needed
];

const cardVariants = {
  selected: {
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 2,
  },
  unselected: {
    scale: 1,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
};

const Projects = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilter = (category) => {
    setCurrentCategory(category);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="h-screen">
      <h2>Portfolio</h2>
      <div className="projects__gallery">
        <div className="filter__buttons">
          <button
            className="filter__btn media"
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className="filter__btn media"
            onClick={() => handleFilter("reactprojects")}
          >
            React Projects
          </button>
          <button
            className="filter__btn media"
            onClick={() => handleFilter("angularprojects")}
          >
            Angular Projects
          </button>
          <button
            className="filter__btn media"
            onClick={() => handleFilter("arduinoprojects")}
          >
            Arduino Projects
          </button>
        </div>
        <div className="projects__cards__container">
          {projects
            .filter(
              (project) =>
                currentCategory === "all" ||
                project.category === currentCategory
            )
            .map((project, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="projects__card" key={index}>
                    <div className="projects__card__content">
                      <img
                        className="projects__card__img"
                        src={project.image}
                        alt={project.name}
                      />
                      <div className="project__title__overlay">
                        <div className="projects__card__buttons">
                          <a
                            className=" btn projects__btn__responsive"
                            href={project.gitHub}
                            target="_blank"
                          >
                            GitHub
                          </a>
                          <a
                            className=" btn projects__btn__responsive"
                            href={project.liveDemo}
                            target="_blank"
                          >
                            Live Demo
                          </a>
                        </div>
                        <div className="text__overlay">{project.name}</div>
                      </div>
                      <div className="projects__card__buttons">
                        <a
                          className=" btn projects__btn__responsive"
                          href={project.gitHub}
                          target="_blank"
                        >
                          GitHub
                        </a>
                        <a
                          className=" btn projects__btn__responsive"
                          href={project.liveDemo}
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
