import React, { useEffect, useRef } from 'react';
import './section4.css';

import WomanImage from './img/Woman.jpg';

function Section4() {
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
    <section ref={sectionRef} id="sobre" className="section4">

      <img src={WomanImage} alt="Woman" className="woman-image"/>

      <div className="overlay-text">
        <h1>Sobre nós</h1>
        <p>Bem-vindo à Academia Gym, seu destino para saúde e forma física. Com treinadores experientes, equipamentos modernos e uma variedade de aulas, estamos aqui para apoiar sua jornada de fitness.</p>
        <p>Nossa missão é criar um ambiente acolhedor onde todos possam alcançar seu melhor, independentemente do nível de experiência. Explore nossas instalações e junte-se à comunidade da Academia Gym hoje mesmo!</p>
        <button className="eu-quero-btn">LEIA MAIS</button>
      </div>
    </section>
  );
}

export default Section4;