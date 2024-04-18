import React, { useEffect, useRef } from 'react';
import './section2.css';

import haltereImage from './img/Haltere.png';
import MuscleImage from './img/Muscle.png';
import SeringaImage from './img/Seringa.png';
import EsteiraImage from './img/Esteira.png';

function Section2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5 // Define o ponto de corte para 50% de visibilidade
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="caracteristicas" className="section2">
      <div className="overlay-text">
        <h1>Caracteristicas </h1> 
        <div className="features">
          <div className="feature-item">
            <img src={haltereImage} alt="Haltere" />
            <p className="feature-text">Levantamento de peso</p>
          </div>
          <div className="feature-item">
            <img src={MuscleImage} alt="Muscle" />
            <p className="feature-text">Crescimento Muscular</p>
          </div>
          <div className="feature-item">
            <img src={SeringaImage} alt="Seringa" />
            <p className="feature-text">Pump Monstruoso</p>
          </div>
          <div className="feature-item">
            <img src={EsteiraImage} alt="Esteira" />
            <p className="feature-text">Cardio opcional</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
