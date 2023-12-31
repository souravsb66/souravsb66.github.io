import React, { useState } from "react";
import "./header.css";
import logo from "../../Assets/Logo3.png"
import name from "../../Assets/Name.gif"
import { downloadResume } from "../../utils/DownloadResume";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  // Toggle Menu
  const [toggle, showmenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header ">
      <nav className="container" id="nav-menu">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="S B" className="nava__logo-img"/>
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home"
                    ? "nav-link home active-link"
                    : "nav-link home"
                }
              >
                <i className="uil uil-home nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav-link about active-link"
                    : "nav-link about"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav-link skills active-link"
                    : "nav-link skills"
                }
              >
                <i className="uil uil-cog  nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav-link projects active-link"
                    : "nav-link projects"
                }
              >
                <i class="uil uil-file-info-alt nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav-link contact active-link"
                    : "nav-link contact"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav__item">
              <button
                id="resume-button-1"
                className="nav-link resume button-small button--flex"
                onClick={downloadResume}
              >
                Resume
              </button>
            </li>

          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showmenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showmenu(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
