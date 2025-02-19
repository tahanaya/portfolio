import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackToTop from './components/BackToTop';
import Reviews from './sections/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Reviews />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;