import React from "react";
import "./stats.css";

const Stats = () => {
  return (
    <section id="stats__container" className="section">
      <h2 className="section__title">Stats</h2>
      <span className="section__subtitle">My Github Stats</span>

      <div className="container__content container">
          <div id="stats-div">
            <a
              href="https://git.io/streak-stats"
              target="_blank"
              className="github-streak-stats"
            >
              <img
                className="stats__img"
                src="https://github-readme-streak-stats.herokuapp.com?user=souravsb66&theme=dark&hide_border=true"
                alt="GitHub Streak"
              />
            </a>

            <a
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
              className="github-stats-card"
            >
              <img
                className="stats__img"
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=souravsb66&theme=dark&show_icons=true"
              />
            </a>
          </div>

          <div id="github-lang-div">
            <a
              href="https://github.com/anuraghazra/convoychat"
              className="github-top-langs"
              target="_blank"
            >
              <img
                className="stats__img"
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=souravsb66&theme=dark&langs_count=8&layout=compact"
              />
            </a>
          </div>

      </div>
    </section>
  );
};

export default Stats;
