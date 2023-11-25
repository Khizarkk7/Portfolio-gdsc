/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/1.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
    {
      title: "Project 3",
      img: "/projects/3.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
    {
      title: "Project 4",
      img: "/projects/4.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
    {
      title: "Project 5",
      img: "/projects/5.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
    {
      title: "Project 6",
      img: "/projects/6.png",
      gLink: "https://github.com/Khizarkk7",
      lLink: "https://meeting-altered.unicornplatform.page",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Khizarkk7"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              Computer programming servers the purpose of finding a sequence of instructions that are able to automate the performance of specific tasks or solve defined problems. 
              Programming process therefore requires expertise in a variety of other subjects such as the knowledge of application domains, formal logic and specified algorithms. 
              Computer programming is usually regarded as one phase in a software development process within software engineering.

              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
