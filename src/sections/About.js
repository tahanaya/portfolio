import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiDocker, SiPostgresql, SiSpringboot } from 'react-icons/si';
import '../styles/About.css';
import { GrOracle } from 'react-icons/gr';
import { DiJava } from 'react-icons/di';

const About = () => {
  const techStack = [
    { icon: <FaReact />, name: 'React' },
    {icon: <SiSpringboot/> , name: 'SpringBoot'},
    { icon: <FaNodeJs />, name: 'Node.js' },
    {icon : <DiJava/>, name: 'Java'},
    {icon : <GrOracle/>, name: 'Oracle'},
  
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <FaAws />, name: 'AWS' },
    
    
    
  ];

  const milestones = [
    { year: '2023', event: 'Started my journey in software development' },
    { year: '2024', event: 'Landed my first internship as a Full-Stack Developer' },
    { year: '2025', event: 'Built 10+ projects' },
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <h2 className="about-header">
          About <span className="highlight">Me</span>
        </h2>
        <div className="about-content">
          {/* Left Column: Photo */}
          <motion.div
            className="about-photo"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="photo-wrapper">
              <img
                src="/imageana.png" 
                alt="Your Name"
                className="photo"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio and Details */}
          <motion.div
            className="about-bio"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="bio-text">
              Hi, I'm <span className="highlight">Taha Naya</span>, a passionate software engineer with expertise in building scalable, user-friendly applications. I specialize in full-stack development, cloud computing, and AI/ML. I love solving complex problems and turning ideas into reality through code.
            </p>

            {/* Tech Stack */}
            <div className="tech-stack">
              <h3 className="subheader">Tech Stack</h3>
              <div className="tech-list">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="milestones">
              <h3 className="subheader">Milestones</h3>
              <div className="milestone-list">
                {milestones.map((milestone, index) => (
                  <div key={index} className="milestone-item">
                    <div className="milestone-year">
                      <span>{milestone.year}</span>
                    </div>
                    <p className="milestone-event">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Actions */}
            <div className="cta-buttons">
              <motion.a
                href="#projects"
                className="cta primary"
                whileHover={{ scale: 1.05 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="cta secondary"
                whileHover={{ scale: 1.05 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
