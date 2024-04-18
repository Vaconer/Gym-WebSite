import React, { useEffect, useRef } from 'react';
import './section5.css';

function Section5() {
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
    <section ref={sectionRef} id="contato" className="section5">
    <h1>Entre em Contato</h1>
      <div class="form-card1">
  <div class="form-card2">
    <form class="form">
      <p class="form-heading">Mande-nos uma mensagem</p>

      <div class="form-field">
        <input 
          required="" 
          placeholder="Nome" 
          class="input-field" 
          type="text" />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Email"
          class="input-field"
          type="email"
        />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Assunto"
          class="input-field"
          type="text"
        />
      </div>

      <div class="form-field">
        <textarea
          required=""
          placeholder="Mensagem"
          cols="30"
          rows="3"
          class="input-field"
        ></textarea>
      </div>
      <button class="sendMessage-btn">Enviar Mensagem</button>
    </form>
  </div>
</div>

    </section>
  );
}

export default Section5;