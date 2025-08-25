import React from 'react';
import { Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import 'volto-sevilla-imd-website/theme/_s2.scss';
import ArrowLeftSliderDefaultIcon from './arrow-left-slider-default.png';
import ArrowRightSliderDefaultIcon from './arrow-right-slider-default.png';
import LinkExternalIcon from './link-external.png';

const S2 = () => {
  return (
    <section className="events-section">
      {/* Events Background */}
      <div className="events-background" />

      {/* Events Content */}
      <div className="events-content">
        {/* Slider Controls */}
        <div className="slider-controls">
          <button className="slider-button left">
            <Image
              src={ArrowLeftSliderDefaultIcon}
              alt="Anterior"
            />
          </button>
          <button className="slider-button right active">
            <Image
              src={ArrowRightSliderDefaultIcon}
              alt="Siguiente"
            />
          </button>
        </div>

        {/* Event Card */}
        <div className="event-cards">
          <article className="event-card">
            <div className="card-content">
              <div className="content-text">
                <h2 className="event-title">
                  Circuito Divina Seguros de Carreras
                </h2>
                <h3 className="event-subtitle">
                  #Sevilla10 del Ayuntamiento
                </h3>

                <div className="event-date">
                  <span className="day">00</span>
                  <span className="month">Mes</span>
                </div>

                <p className="event-description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit condim entum justo quis pellen et dignissim.
                </p>

                <a href="#" className="event-link">
                  <span><a href="#" title="Visita su web">Visita su web</a></span>
                  <div className="arrow-icon">
                    <Image
                        src={LinkExternalIcon}
                        alt="Visita su web"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="card-image">
              <Image
                src={DefaultImageSVG}
                alt="Imagen de Evento"
              />
            </div>
          </article>

          {/* Slider Pagination */}
          <div className="slider-pagination">
            <div className="pagination-bar active"></div>
            <div className="pagination-bar"></div>
            <div className="pagination-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S2;
