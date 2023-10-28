import profileImage from "../../Assets/profile.jpeg"

const Home = () => {

    return <section id="home" style={{marginTop:"200px"}}>
        Home
        <div>
            <img src={profileImage} alt="profile-photo" id="home-img"/>
            <a href="./Assets/Sourav_Biswas_Resume.pdf" target="_blank" download="Sourav_Biswas_Resume" id="resume-link-2">Download</a>
        </div>
    </section>
}

export default Home;