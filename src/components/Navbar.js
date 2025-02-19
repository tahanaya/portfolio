import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Taha Naya</a>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="socials">
          <a
            href="https://github.com/tahanaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/taha-naya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
