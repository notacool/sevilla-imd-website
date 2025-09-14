/**
 * S3 component.
 * @module components/Sections/s3
 */

import React from 'react';
import { Image } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import NotificationsIcon from 'volto-sevilla-imd-website/icons/notifications.png';
import FeaturedIcon from 'volto-sevilla-imd-website/icons/featured.png';
import LinkExternalIcon from 'volto-sevilla-imd-website/icons/link-external.png';
import ArrowLeftSliderDefaultIcon from 'volto-sevilla-imd-website/icons/arrow-left-slider-default.png';
import ArrowRightSliderDefaultIcon from 'volto-sevilla-imd-website/icons/arrow-right-slider-default.png';
import CardFavoritedIcon from 'volto-sevilla-imd-website/icons/card-favorited.png';
import ArrowRightYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-yellow.png';
import AvisosImg from 'volto-sevilla-imd-website/theme/static/images/featured/avisos.jpg';
import PerfilImg from 'volto-sevilla-imd-website/theme/static/images/featured/perfil.jpg';
import TransparenciaImg from 'volto-sevilla-imd-website/theme/static/images/featured/transparencia.jpg';
import AntifraudeImg from 'volto-sevilla-imd-website/theme/static/images/featured/antifraude.jpg';

const S3 = () => {
  // Sample data for notices
  const notices = [
    // {
    //   id: 1,
    //   title: 'Aprobación definitiva de subvenciones a Escuelas deportivas de iniciación 2025-2026',
    //   image: AvisosImg,
    //   buttonText: 'Ver más',
    //   url: '#',
    // },
    {
      id: 1,
      title: 'Aprobación definitiva de subvenciones a Escuelas deportivas de iniciación 2025-2026',
      image: CardFavoritedIcon,
      buttonText: 'Ver más',
      url: '#',
    },
    {
      id: 2,
      title: 'Fechas de inscripción de los Juegos Deportivos Municipales 2025-2026',
      image: CardFavoritedIcon,
      buttonText: 'Ver más',
      url: '#',
    },
  ];

  // Sample data for highlighted content
  const highlights = [
    {
      id: 1,
      title: 'Perfil del contratante',
      description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
      image: PerfilImg,
      buttonText: 'Visita su web',
      url: '#',
      active: false,
    },
    {
      id: 2,
      title: 'Portal de transparencia',
      description: 'Visita la web del portal de transparencia del Ayuntamiento de Sevilla.',
      image: TransparenciaImg,
      buttonText: 'Visita su web',
      url: '#',
      active: false,
    },
    {
      id: 3,
      title: 'Canal de denuncias antifraude',
      description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
      image: AntifraudeImg,
      buttonText: 'Visita su web',
      url: '#',
      active: true,
    },
  ];

  return (
    <div className="section-s3">
      {/* Main Title */}
      <div className="section-title">
        <h2>Actualidad</h2>
      </div>

      {/* Avisos Section */}
      <div className="section-container">
        <div className="section-subtitle">
          <div className="icon">
            <Image src={NotificationsIcon} alt="Avisos" />
          </div>
          <div className="text">Avisos</div>
        </div>

        <div className="notices-container">
            <div className="notice-card">
              <div className="notifications-image">
                <Image src={AvisosImg} alt="Avisos" />
              </div>
            </div>
          {notices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <div className="notice-image">
                <Image src={notice.image} alt={notice.title} />
              </div>
              <div className="notice-content">
                <h3 className="notice-title">{notice.title}</h3>
                <UniversalLink href="#" className="card-link">
                  {notice.buttonText} <img src={ArrowRightYellowIcon} alt={notice.buttonText} className="button-icon" />
                </UniversalLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destacamos Section */}
      <div className="section-container">
        <div className="section-subtitle">
          <div className="icon">
            <Image src={FeaturedIcon} alt="Te destacamos" />
          </div>
          <div className="text">Te destacamos</div>
        </div>

        <div className="highlights-container">
          {highlights.map((highlight) => (
            <div key={highlight.id} className={`highlight-card ${highlight.active ? 'active' : ''}`}>
              <div className="highlight-image">
                <Image src={highlight.image} alt={highlight.title} />
              </div>
              <div className="highlight-content">
                <div className={`indicator-line ${highlight.active ? 'active' : ''}`}></div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
                <UniversalLink href={highlight.url} className="highlight-link">
                  <span>{highlight.buttonText}</span>
                  <div className="arrow-icon">
                    <Image src={ArrowRightSliderDefaultIcon} alt="Ir" />
                  </div>
                </UniversalLink>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="navigation-controls">
          <button className="nav-button prev">
            <Image src={ArrowLeftSliderDefaultIcon} alt="Anterior" />
          </button>
          <button className="nav-button next">
            <Image src={ArrowRightSliderDefaultIcon} alt="Siguiente" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default S3;
