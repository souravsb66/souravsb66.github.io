import React from 'react'
import "./stats.css"

const Stats = () => {
  return (
    <section id="stats__container" className='section'>
        <h2 className="section__title">Stats</h2>
        <span className="section__subtitle">My Github Stats</span>

        <div className="container__content container">
            <a href="https://git.io/streak-stats" target="_blank" class="github-streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=souravsb66&theme=dark&hide_border=true" alt="GitHub Streak" /></a>
        </div>
    </section>
  )
}

export default Stats