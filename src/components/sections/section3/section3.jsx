import React, { useEffect, useRef } from 'react';
import './section3.css';

function Section3() {
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
    <section ref={sectionRef} id="ofertas" className="section3">
      <div className="overlay-text">
        <h1>Escolha seu plano</h1>
        <div className="pricing-tables">
          <div className="pricing-table">
            <h2>Plano Mensal</h2>
            <table className="comparison-table">
              <tbody>
                <tr>
                  <td>Flexibilidade de Pagamento</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Acesso Imediato</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Liberdade de Cancelamento</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
            <div className="price">$99.99/mês</div>
            <button className="eu-quero-btn">EU QUERO ESSE</button>
          </div>
          <div className="pricing-table">
            <h2>Plano 6 Meses</h2>
            <table className="comparison-table">
              <tbody>
                <tr>
                  <td>Flexibilidade de Pagamento</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Acesso Imediato</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Liberdade de Cancelamento</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
            <div className="price">$89.99/mês</div>
            <button className="eu-quero-btn">EU QUERO ESSE</button>
          </div>
          <div className="pricing-table">
            <h2>Plano Anual</h2>
            <table className="comparison-table">
              <tbody>
                <tr>
                  <td>Flexibilidade de Pagamento</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Acesso Imediato</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Liberdade de Cancelamento</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
            <div className="price">$79.99/mês</div>
            <button className="eu-quero-btn">EU QUERO ESSE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
