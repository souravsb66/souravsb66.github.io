import React from "react";

const WorkCard = ({ image, title, description, tech_stack, github, live }) => {
  return (
    <div className="work__card project-card">
      <img src={image} className="work__img" />
      <h3 className="project-title">{title}</h3>
      <p class="project-description">{description}</p>
      <p class="project-tech-stack">
        {tech_stack.map((ele, index) => {
          return (
            <span key={index} className="project-card-tech-stack">
              {ele}
            </span>
          );
        })}
      </p>
      <div className="work__button-div">
        <a
          href={github}
          className="work__button project-github-link"
          target="_blank"
        >
          <i class="bx bxl-github work__button-icon"></i>
        </a>
        <a
          href={live}
          className="work__button project-deployed-link"
          target="_blank"
        >
          <i class="bx bx-play-circle work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
