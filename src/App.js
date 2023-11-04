import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';
import Stats from './components/stats/Stats';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Contacts />
      </main>
      
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
