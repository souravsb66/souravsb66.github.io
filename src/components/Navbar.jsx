import styled from "styled-components";

const Navbar = () => {
    return <NAV id="nav-menu">
        <div id="nav-logo">
            Portfolio
        </div>
        <div id="navbar-links">
            <a href="#home" class="nav-link home">Home</a>
            <a href="#about"class="nav-link about">About</a>
            <a href="#skills"class="nav-link skills">Skills</a>
            <a href="#projects"class="nav-link projects">Projects</a>
            <a href="#contact"class="nav-link contact">Contact</a>
            {/* <a href="" class="nav-link resume">Resume</a> */}
        </div>
        <div class="nav-link resume">
            <a href="./Assets/Sourav_Biswas_Resume.pdf" target="_blank" download="Sourav_Biswas_Resume" id="resume-link-1">Download</a>
        </div>
    </NAV>
}

const NAV = styled.nav `
    display: flex;
    justify-content: space-around;
    top: 0;
    width: 100%;
    background-color: white;
    position: fixed;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export default Navbar;