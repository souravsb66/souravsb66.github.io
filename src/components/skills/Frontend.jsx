import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">HTML</h3>
              <span className="skills__level">Basic</span>
              <img src="" alt="" className="skills-card-img"></img>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group skills-card">
          <div className="skills__data">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Chakra UI</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
