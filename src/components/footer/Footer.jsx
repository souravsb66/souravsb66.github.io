import React from "react";
import "./footer.css"
import logo from "../../Assets/Logo2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo-div">
          <img src={logo} alt="Sourav Biswas" className="footer__logo-img"/>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/souravbiswasss/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/HonestTalksYT"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.facebook.com/souravsb66/"
            className="footer__social-link "
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Sourav Biswas. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
