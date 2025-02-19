import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';



const Home = () => {

  
  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Gradient Background */}
      <div className="gradient-bg" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hero-text"
        >
          <h4 className="greeting">Hi, I'm</h4>
          <h1 className="name">Taha Naya</h1>
          
          {/* Dynamic Typing Animation */}
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Full-Stack Developer',
              2000,
             
            ]}
            wrapper="h2"
            className="role"
            repeat={Infinity}
          />

          {/* CTAs */}
          <div className="cta-buttons">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="cta"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="cta secondary"
            >
              <FaFileDownload /> Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="socials">
            <a href="https://github.com/tahanaya" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/taha-naya" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Optional: 3D Avatar or Tech Stack Icons */}
        <div className="hero-visual">
          {/* Add a 3D model or animated tech icons here later */}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default Home;