import React from "react";
import "./stats.css";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <section id="stats__container" className="section">
      <h2 className="section__title">Stats</h2>
      <span className="section__subtitle">My Github Stats</span>

      <div className="container__content container">
        <div id="calender-div" className="react-activity-calendar">
          <GitHubCalendar
            username="souravsb66"
            colorScheme="dark"
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
          />
        </div>
        <div id="stats-div">
          <a
            href="https://git.io/streak-stats"
            target="_blank"
            id="github-streak-stats"
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
            id="github-stats-card"
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
            id="github-top-langs"
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
