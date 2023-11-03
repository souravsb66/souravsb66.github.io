import React, { useState, useEffect } from "react";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";
import WorkCard from "./WorkCard";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((ele) => {
        return ele.category.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((ele, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? `active-work` : ""} work__item`}
              key={index}
            >
              {ele.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((ele) => {
          return <WorkCard key={ele.id} {...ele} />;
        })}
      </div>
    </div>
  );
};

export default Works;
