import React, { useEffect, useRef } from 'react';
import './section1.css';
import GirlImage from './img/Girl.jpg';

function Section1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('fadeInOut');
        } else {
          section.classList.remove('fadeInOut');
        }
      });
    }, {
      threshold: 0.5 // Configuração do percentual de visibilidade para disparar a animação
    });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section id='home' ref={sectionRef} className="section1">
      <img src={GirlImage} alt="Girl" />
      <div className="overlay-text">
        <p>APRIMORE SEU </p>
        <h1>FITNESS </h1>
        <h4>Construa um Físico Incrivel aqui</h4>
      </div>
    </section>
  );
}

export default Section1;
