import React from 'react'
import "./projects.css"
import Works from './Works'

const Projects = () => {
  return (
    <section id='projects' className="work section">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>

        <Works />
    </section>
  )
}

export default Projects