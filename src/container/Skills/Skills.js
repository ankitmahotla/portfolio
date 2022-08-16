import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
import { images } from '../../constants';

const skills = [
  {
    name: 'Git',
    icon: images.git,
    bgColor: ''
  },
  {
    name: 'ReactJS',
    icon: images.react,
    bgColor: ''
  },
  {
    name: 'Sass',
    icon: images.sass,
    bgColor: ''
  },
  {
    name: 'Tailwind',
    icon: images.tailwind,
    bgColor: ''
  },
  {
    name: 'C++',
    icon: images.cpp,
    bgColor: ''
  },
  {
    name: 'MongoDB',
    icon: images.mongo,
    bgColor: ''
  },
  {
    name: 'NodeJS',
    icon: images.node,
    bgColor: ''
  },
  {
    name: 'React Native',
    icon: images.reactnative,
    bgColor: ''
  }
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text" id='Skills'>Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;