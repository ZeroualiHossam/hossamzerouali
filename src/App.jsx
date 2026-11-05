import { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Contact from './components/commons/contact/Contact';
import Footer from './components/commons/footer/footer';
import Projects from './components/commons/projects/Projects';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Description from './sections/Description/Description';
import Home from './sections/Home/Home';

const TRACKING_ID = "G-23ZGB4LL0L";
ReactGA.initialize(TRACKING_ID);

const AppInner = () => {
  const { mode } = useTheme();

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
    <div className="App" data-theme={mode}>
      <div id="home"><Home /></div>
      <div id="description"><Description /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <button onClick={scrollToTop} className="scrollToTopBtn">
        <img className='icon' src="https://api.iconify.design/ep:top.svg?color=white" alt='top' />
      </button>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
