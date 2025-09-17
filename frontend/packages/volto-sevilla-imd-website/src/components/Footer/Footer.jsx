/**
 * Footer component.
 * @module components/Footer/Footer
 */

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import ArrowRightYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-yellow.png';

const Footer = (props) => {
  const { className } = props;

  // Try to get responsive info from Redux store safely
  let responsiveName = '';
  try {
    // Use selector with fallback
    responsiveName = useSelector((state) =>
      state?.screen?.responsive?.name || 'computer'
    );
  } catch (error) {
    console.error('Error accessing responsive state:', error);
    responsiveName = 'computer'; // Default to computer if there's an error
  }

  return (
    <footer className={cx('footer', className, responsiveName)}>
      <div className="footer-background"></div>

      <Container>
        <Grid stackable className="footer-content">
          {/* Column 1 - IMD Information */}
          <Grid.Column mobile={12} tablet={6} computer={3} className="info-column">
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
          </Grid.Column>

          {/* Column 2 - Links */}
          <Grid.Column mobile={12} tablet={6} computer={3} className="links-column">
            <UniversalLink href="/area-privada" title="Área privada">Área privada</UniversalLink>
            <UniversalLink href="/mapa-sitio" title="Mapa del sitio">Mapa del sitio</UniversalLink>
            <UniversalLink href="/accesibilidad" title="Accesibilidad">Accesibilidad</UniversalLink>
            <UniversalLink href="/contacto" title="Contacto">Contacto</UniversalLink>
            <UniversalLink href="/politica-cookies" title="Política de cookies">Política de cookies</UniversalLink>
            <UniversalLink href="/politica-privacidad" title="Política de privacidad">Política de privacidad</UniversalLink>
            <UniversalLink href="/aviso-legal" title="Aviso legal">Aviso legal</UniversalLink>
          </Grid.Column>

          {/* Column 3 - Newsletter and Social Media */}
          <Grid.Column mobile={12} tablet={6} computer={3} className="newsletter-column">
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
                <img src={ArrowRightYellowIcon} alt="SUBSCRIBIRSE" />
              </button>
            </div>
            <div className="social-section">
              <h3>Permanece en contacto</h3>
              <div className="social-icons">
                <a href="#" className="social-icon facebook" title="Facebook"></a>
                <a href="#" className="social-icon twitter" title="Twitter"></a>
                <a href="#" className="social-icon youtube" title="YouTube"></a>
                <a href="#" className="social-icon instagram" title="Instagram"></a>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </Container>

      {/* Bottom Area */}
      <div className="bottom-area">
        <Container>
          <p>IMD@2025</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
