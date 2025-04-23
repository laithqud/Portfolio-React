import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGit, faFigma, faLaravel } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    {
      icon: faCode,
      title: "Web Development",
      text: "Building responsive, user-centric websites with modern web technologies and innovative solutions."
    },
    {
      icon: faGit,
      title: "Version control",
      text: "Proficient in using Git for version control, ensuring seamless collaboration and efficient project management."
    },
    {
      icon: faFigma,
      title: "Figma",
      text: "Skilled in using Figma for designing interactive, high-fidelity prototypes and collaborative UI/UX design."
    },
    {
      icon: faDatabase,
      title: "SQL",
      text: "Experienced in using SQL to manage, query, and optimize databases for efficient data retrieval and analysis."
    },
    {
      icon: faLaravel,
      title: "Laravel",
      text: "Proficient in Laravel for building robust, scalable web applications with clean code and efficient backend solutions."
    }
  ];

  return (
    <section id="skills">
      <div className="name-container">
        <div className="line"></div>
        <h2 className="block_title">Skills</h2>
        <div className="line"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="circle" key={index}>
            <div className="icon">
              <FontAwesomeIcon icon={skill.icon} size="2x" style={{ color: '#000000' }} />
            </div>
            <div className="title">{skill.title}</div>
            <div className="text">{skill.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;