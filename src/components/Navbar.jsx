import React, { useState } from "react";

import { BiBookAlt } from "react-icons/bi";
import {
  FaBars,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa"; // Import necessary icons

import "../styles/navbar.css";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  // const volume = 0.5; // Adjust the volume as needed (0.0 to 1.0)

  // const handleLinkClick = () => {
  //   setIsSoundPlaying(true);
  // };

  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const [ativenow, setActiveNow] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={ativenow === "#" ? "active" : ""}
        onClick={() => setActiveNow("#")}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        className={ativenow === "#about" ? "active" : ""}
        onClick={() => setActiveNow("#about")}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        className={ativenow === "#experience" ? "active" : ""}
        onClick={() => setActiveNow("#experience")}
      >
        <BiBookAlt />
      </a>
      <a
        href="#projects"
        className={ativenow === "#projects" ? "active" : ""}
        onClick={() => setActiveNow("#projects")}
      >
        <FaBriefcase />
      </a>
      <a
        href="#contact"
        className={ativenow === "#contact" ? "active" : ""}
        onClick={() => setActiveNow("#contact")}
      >
        <FaEnvelope />
      </a>
    </nav>
  );
};

export default Navbar;

// return (
//   <>
//     <nav>
//       <div className="nav-container">
//         <div className="nav-links">
//           {/* Replace link names with icons */}
//           <Link
//             activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="cursor-pointer"
//             onClick={handleLinkClick}
//           >
//             <FaHome />
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="cursor-pointer"
//             onClick={handleLinkClick}
//           >
//             <FaUser />
//           </Link>
//           <Link
//             to="projects"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="cursor-pointer"
//             onClick={handleLinkClick}
//           >
//             <FaBriefcase />
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="cursor-pointer"
//             onClick={handleLinkClick}
//           >
//             <FaEnvelope />
//           </Link>
//         </div>
//         <div className="hamburger-icon" onClick={handleMenuToggle}>
//           <FaBars />
//         </div>
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: "-100%" }}
//               animate={{ opacity: 1, x: "-20%" }}
//               exit={{ opacity: 0, x: "-100%" }}
//               transition={{ duration: 0.3 }}
//               className="mobile-menu"
//             >
//               <Link
//                 to="home"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="cursor-pointer"
//                 onClick={handleMenuToggle}
//               >
//                 <FaHome />
//               </Link>
//               <Link
//                 to="about"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="cursor-pointer"
//                 onClick={handleMenuToggle}
//               >
//                 <FaUser />
//               </Link>
//               <Link
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="cursor-pointer"
//                 onClick={handleMenuToggle}
//               >
//                 <FaBriefcase />
//               </Link>
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="cursor-pointer"
//                 onClick={handleMenuToggle}
//               >
//                 <FaEnvelope />
//               </Link>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//     {isSoundPlaying && (
//       <ReactHowler
//         src={clickSoundUrl}
//         playing={true}
//         volume={volume}
//         onEnd={() => setIsSoundPlaying(false)}
//       />
//     )}
//   </>
// );
