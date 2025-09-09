/**
 * S1 component.
 * @module components/Sections/s1
 */

import React from 'react';

const S1 = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="bg-overlay"></div>
        <div className="bg-image"></div>
      </div>

      <div className="hero-content">
        <div className="content-wrapper">
          <h2 className="subtitle">imd</h2>
          <h1 className="title">
            Instituto Municipal de Deportes
          </h1>
          <p className="description">
            El IMD de Sevilla es el organismo responsable del deporte municipal de la ciudad.
          </p>
          <button className="cta-button">
            <span><a href="/sobre-nosotros" title="Sobre nosotros">sobre nosotros</a></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default S1;
