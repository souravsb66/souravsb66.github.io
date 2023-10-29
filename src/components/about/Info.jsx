import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-code-block about__icon'></i>

            <h3 className="about__title">Coding</h3>
            <span className="about__subtitle">1200+ Hours</span>
        </div>
        <div className="about__box">
            <i class='bx bx-desktop about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
        <div className="about__box">
            <i class='bx bxs-network-chart about__icon'></i>

            <h3 className="about__title">DSA</h3>
            <span className="about__subtitle">500+ Solved</span>
        </div>
    </div>
  )
}

export default Info
