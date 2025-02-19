import { motion, useAnimation } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const projects = [
    {
      title: 'Jarvice Assistant',
      description: 'A voice assistant for personalized usage.',
      image: '/jarvice.png', // Replace with your image path
    },
    {
      title: 'EcoMarket',
      description: 'A sustainable e-commerce platform connecting local producers with eco-conscious consumers.',
      image: '/eco.png', // Replace with your image path
    },
   
    {
      title: 'FitTrack',
      description: 'A fitness tracking app that monitors workouts.',
      image: '/FIT.png', // Replace with your image path
    },
    {
      title: 'Future Engineers',
      description: 'A web app to dicover engineering opportunities.',
      image: '/fe.jpg', // Replace with your image path
    },
    {
      title: 'NextGenEra',
      description: 'A web app for student enrollment and course management.',
      image: '/nge.png', // Replace with your image path
    },
    {
      title: 'Travel Explorer',
      description: 'An interactive travel planning app that aggregates destination data.',
      image: '/travelexp.png', // Replace with your image path
    },
  
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = 320; // Width of each card + margin
    const maxScroll = (projects.length - 1) * cardWidth;

    if (direction === 'left' && scrollPosition > 0) {
      setScrollPosition((prev) => Math.max(prev - cardWidth, 0));
    } else if (direction === 'right' && scrollPosition < maxScroll) {
      setScrollPosition((prev) => Math.min(prev + cardWidth, maxScroll));
    }
  };

  useEffect(() => {
    controls.start({
      x: -scrollPosition,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    });
  }, [scrollPosition, controls]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-header">
          My <span className="highlight">Projects</span>
        </h2>

        {/* Scroll Buttons */}
        <div className="scroll-buttons">
          <button onClick={() => handleScroll('left')} className="scroll-button">
            &lt;
          </button>
          <button onClick={() => handleScroll('right')} className="scroll-button">
            &gt;
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-wrapper">
          <motion.div
            ref={containerRef}
            className="projects-grid"
            animate={controls}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${index === Math.round(scrollPosition / 320) ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Back (default view) */}
                <motion.div
                  className="card-back"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="card-back-design">
                    <div className="emblem"></div>
                  </div>
                </motion.div>

                {/* Card Front (revealed view) */}
                <motion.div
                  className="card-front"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flippedIndex === index ? 0 : 180 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="card-front-content">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
