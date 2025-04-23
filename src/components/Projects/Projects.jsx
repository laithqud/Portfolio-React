import React from 'react';
import './Projects.css';
import appleImage from '../../images/apple.jpg';
import airbnbImage from '../../images/airbnb.jpg';
import spotifyImage from '../../images/spotify.png';
import trelloImage from '../../images/trello.png';

const Projects = () => {
  const projects = [
    {
      title: "Apple Shop",
      image: appleImage,
      description: "Recreated Apple's online store homepage, focusing on responsive design, product carousels, and interactive UI elements.",
      link: "https://www.apple.com/jo/"
    },
    {
      title: "Airbnb",
      image: airbnbImage,
      description: "Recreated Airbnb's homepage, emphasizing responsive layout, search functionality, and dynamic content display.",
      link: "https://www.airbnb.com/"
    },
    {
      title: "Spotify",
      image: spotifyImage,
      description: "Recreated a Spotify playlist page, focusing on responsive design, interactive elements, and audio integration.",
      link: "https://open.spotify.com/"
    },
    {
      title: "Trello",
      image: trelloImage,
      description: "Recreated a Trello-like task management board with draggable cards, interactive columns, and task organization features.",
      link: "https://trello.com/"
    }
  ];

  return (
    <section id="projects">
      <div className="name-container">
        <div className="line"></div>
        <h2 className="block_title">Projects</h2>
        <div className="line"></div>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="undrline" key={index}>
            <div className="project-container">
              <div className="projects-div1">
                <h3 className="h3FontSize">{project.title}</h3>
                <img className="img-project" src={project.image} alt={project.title} />
              </div>
              <div className="projects-div2">
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;