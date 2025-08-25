/**
 * Footer component.
 * @module components/Footer/Footer
 */

import React from 'react';
import { Image } from 'semantic-ui-react';
import ArrowRightYellowIcon from './arrow-right-yellow.png';
// import 'volto-sevilla-imd-website/theme/components/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>

      <div className="footer-content">
        {/* Column 1 - IMD Information */}
        <div className="info-column">
          <div className="imd-wrapper">
            <h3>IMD</h3>
            <p className="fullname">Instituto Municipal de Deportes de Sevilla</p>
          </div>

          <div className="address-wrapper">
            <h4>Dirección</h4>
            <p>Edificio SIPS</p>
            <p>Pol. Ind. Arte Sacro, calle Química 5</p>
            <p>41015 Sevilla</p>
          </div>
        </div>

        {/* Column 2 - Links */}
        <div className="links-column">
          <a href="/area-privada">Área privada</a>
          <a href="/mapa-sitio">Mapa del sitio</a>
          <a href="/accesibilidad">Accesibilidad</a>
          <a href="/contacto">Contacto</a>
          <a href="/politica-cookies">Política de cookies</a>
          <a href="/politica-privacidad">Política de privacidad</a>
          <a href="/aviso-legal">Aviso legal</a>
        </div>

        {/* Column 3 - Newsletter */}
        <div className="newsletter-column">
          <h3>Subscribirse al boletín</h3>
          <div className="newsletter-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Escribe tu Email"
              className="newsletter-input"
            />
            <button className="subscribe-button">
              <span>SUBSCRIBIRSE</span>
              {/* <i className="subscribe-icon"></i> */}
              <Image src={ArrowRightYellowIcon} alt="SUBSCRIBIRSE" />
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <h3>Permanece en contacto</h3>
          <div className="social-icons">
            <a href="#" className="social-icon facebook"></a>
            <a href="#" className="social-icon twitter"></a>
            <a href="#" className="social-icon youtube"></a>
            <a href="#" className="social-icon instagram"></a>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="bottom-area">
        <p>IMD@2025</p>
      </div>
    </footer>
  );
};

export default Footer;
