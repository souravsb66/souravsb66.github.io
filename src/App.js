import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
