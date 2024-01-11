
export const downloadResume = () => {
    const resumeUrl = "./Sourav-Biswas-Resume.pdf";
  
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Sourav-Biswas-Resume.pdf"
    link.click()
  
    // const resumeLink ="https://drive.google.com/file/d/1phAUQb5vx3etF7i_66hp6CKW7zz9-HYK/view?usp=sharing"
    const resumeLink ="https://drive.google.com/file/d/1phAUQb5vx3etF7i_66hp6CKW7zz9-HYK/view?usp=sharing"
    window.open(resumeLink, "_blank")
}