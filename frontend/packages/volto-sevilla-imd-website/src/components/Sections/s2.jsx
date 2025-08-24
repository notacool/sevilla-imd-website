import React from 'react';
import { Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import 'volto-sevilla-imd-website/theme/_s2.scss';
// import sliderLeftArrowDefaultSVG from '../../icons/slider-left-arrow-default.svg';
import sliderLeftArrowDefaultSVG from './slider-left-arrow-default.svg';
// import sliderRightArrowDefaultSVG from '../../icons/slider-right-arrow-default.svg';
import sliderRightArrowDefaultSVG from './slider-right-arrow-default.svg';
// import linkExternalSVG from '../../icons/link-external.svg';
import linkExternalSVG from './link-external.svg';

const S2 = () => {
  return (
    <section className="events-section">
      <div className="events-background">
        {/* <img src="./static/images/bg-s2.jpg" alt="Eventos" /> */}
      </div>

      <div className="events-content">
        {/* Slider Controls */}
        <div className="slider-controls">
          <button className="slider-button left">
            {/* <img src="./slider-left-arrow-default.svg" alt="Anterior" /> */}
            <Image
              src={sliderLeftArrowDefaultSVG}
              alt="Anterior"
            />
          </button>
          <button className="slider-button right active">
            {/* <img src="./slider-right-arrow-default.svg" alt="Siguiente" /> */}
            <Image
              src={sliderRightArrowDefaultSVG}
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
                    {/* <img src='./link-external.svg' alt="Visita su web" /> */}
                    <Image
                        src={linkExternalSVG}
                        alt="Visita su web"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="card-image">
              {/* <img src="/static/images/rentangule-default.png" alt="Imagen de Evento" /> */}
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
