import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
