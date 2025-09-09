/**
 * TeaserFeatured Block View.
 * @module components/Blocks/TeaserFeatured/View
 */

import React from 'react';

const TeaserFeatured = (props) => {
  const { data, className } = props;
  // const href = data.href[0]['@id'] || "/sobre-nosotros";
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="bg-overlay"></div>
        <div className="bg-image"></div>
      </div>

      <div className="hero-content">
        <div className="content-wrapper">
          <h2 className="subtitle">{data.subtitle || 'imd'}</h2>
          <h1 className="title">
            {data.title || 'Instituto Municipal de Deportes'}
          </h1>
          <p className="description">
            {data.description || 'El IMD de Sevilla es el organismo responsable del deporte municipal de la ciudad.'}
          </p>
          <button className="cta-button">
            <span>
                <a href={(data.teaser_featured_link && data.teaser_featured_link[0] && data.teaser_featured_link[0]['@id']) || "/sobre-nosotros"}
                   title={data.button || 'Sobre nosotros'}>
                    {data.button || 'Sobre nosotros'}
                </a>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeaserFeatured;
