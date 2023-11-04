import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Node JS</h3>
              <span className="skills__level">Basic</span>
              <img src="" alt="" className="skills-card-img"></img>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Express</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Java</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Mongo DB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            <i class='bx bxs-badge-check' ></i>

            <div>
              <h3 className="skills-card-name">Sanity</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data skills-card">
            {/* <i class='bx bxs-badge-check' ></i> */}

            <div>
              <h3 className="skills-card-name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
