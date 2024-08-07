import React, { useEffect } from 'react';
import './App.css';
import Home from './sections/Home/Home';
import Description from './sections/Description/Description';
import Projects from './components/commons/projects/Projects';
import Contact from './components/commons/contact/Contact';
import Footer from './components/commons/footer/footer';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-23ZGB4LL0L";
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById('home');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="description"><Description /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <button onClick={scrollToTop} className="scrollToTopBtn">
        <img className='icon' src="https://api.iconify.design/ep:top.svg?color=white" alt='top'/>
      </button>
    </div>
  );
}

export default App;
