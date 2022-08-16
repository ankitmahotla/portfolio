import React, { useState} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';
import { images } from '../../constants';

const works = [
  {
    title: "Movie Database",
    description: "Lists top movies worldwide.",
    imageUrl: images.about01,
    projectLink: 'https://gracious-gates-efb584.netlify.app/',
    codeLink: 'https://github.com/ankitmahotla/movie-database'
  },
  {
    title: "Task Tracker",
    description: "Create, Modify and Delete Tasks.",
    imageUrl: images.about04,
    projectLink: 'https://github.com/ankitmahotla/Task-Tracker',
    codeLink: 'https://github.com/ankitmahotla/Task-Tracker'
  },
];


const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 id='Projects' className="head-text">Personal Projects</h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imageUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;