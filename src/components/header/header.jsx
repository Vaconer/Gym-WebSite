import React, { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScrollToSection = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToSection);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  return (
    <header id="header">
      <nav>
        <div className="container">
          <span className="logo-name">Gym <span className='red'>.</span></span>
          <ul className='nav-itens'>
            <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}><a href="#home">HOME</a></li>
            <li className={`nav-item ${activeSection === 'caracteristicas' ? 'active' : ''}`}><a href="#caracteristicas">CARACTERISTICAS</a></li>
            <li className={`nav-item ${activeSection === 'ofertas' ? 'active' : ''}`}><a href="#ofertas">OFERTAS</a></li> 
            <li className={`nav-item ${activeSection === 'sobre' ? 'active' : ''}`}><a href="#sobre">SOBRE</a></li>
            <li className={`nav-item ${activeSection === 'contato' ? 'active' : ''}`}><a href="#contato">CONTATO</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
