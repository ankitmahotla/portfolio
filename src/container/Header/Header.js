import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="Home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <div>
              <p className="p-text">Hi, I am</p>
              <h1 className="head-text">Ankit</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [-0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.javascript} alt="profile_bg" />
      </motion.div>
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
