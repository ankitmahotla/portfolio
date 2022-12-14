import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { motion } from "framer-motion";

// Used BEM(BLOCK ELEMENT MODIFIER) for class naming.
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h1>A. Mahotla</h1>
      </div>
      <ul className="app__navbar-links">
        {["Home", "Skills", "Projects", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <li className="app__flex p-text" key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
