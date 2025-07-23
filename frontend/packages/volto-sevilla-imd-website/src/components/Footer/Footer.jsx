/**
 * Footer component.
 * @module components/Footer/Footer
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Container } from 'semantic-ui-react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import facebookSVG from '../../icons/facebook-default.svg';
import instagramSVG from '../../icons/instagram-default.svg';
import twitterSVG from '../../icons/twitter-default.svg';
import youtubeSVG from '../../icons/youtube-default.svg';


export default function Footer() {
  return (
    <footer id="footer">
      <div className="">
        <div className="col1">
          <div className="imdParent">
            <div className="imd">
              <p className="imd1">IMD</p>
            </div>
            <div className="institutoMunicipalDe">Instituto Municipal de Deportes de Sevilla</div>
          </div>
          <div className="direccinWrapper">
            <div className="direccin">Dirección</div>
          </div>
          <div className="edificioSipsParent">
            <div className="direccin">Edificio SIPS</div>
            <div className="direccin">Pol. Ind. Arte Sacro, calle Química 5</div>
            <div className="direccin">41015 Sevilla</div>
          </div>
        </div>
        <div className="imdLinksAlt">

          <div className="content">
              <div className="text">
                <div className="page">
                <UniversalLink className="item" href="/area-privada" title="Area privada">
                  Area privada
                </UniversalLink>
                </div>
              </div>
              <div className="text">
                <div className="page">
                <UniversalLink className="item" href="/sitemap" title="Mapa del sitio">
                  Mapa del sitio
                </UniversalLink>
                </div>
              </div>
              <div className="text">
                <div className="page">
                <UniversalLink className="item" href="/politica-de-privacidad" title="Política de privacidad">
                  Política de privacidad
                </UniversalLink>
                </div>
              </div>
              <div className="text">
                <div className="page">
                <UniversalLink className="item" href="/accesibilidad" title="Accesibilidad">
                  Accesibilidad
                </UniversalLink>
                </div>
              </div>
              <div className="text">
                <div className="page">
                <UniversalLink className="item" href="/aviso-legal" title="Aviso Legal">
                  Aviso Legal
                </UniversalLink>
                </div>
              </div>
          </div>
        </div>
        <div className="permaneceEnContactoParent">
          <div className="permaneceEnContacto">
            <p>Permanece en contacto</p>
          </div>
          <div className="iconsSocial">
            <div className="buttonssocial48px">
              <div className="buttonssocial48pxChild"></div>
              <Icon name={facebookSVG} size="48px" />
            </div>
            <div className="buttonssocial48px">
              <div className="buttonssocial48pxChild"></div>
              <Icon name={instagramSVG} size="48px" />
            </div>
            <div className="buttonssocial48px">
              <div className="buttonssocial48pxChild"></div>
              <Icon name={twitterSVG} size="48px" />
            </div>
            <div className="buttonssocial48px">
              <div className="buttonssocial48pxChild"></div>
              <Icon name={youtubeSVG} size="48px" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomArea">
        <div className="bg" />
        <div className="imd2025">IMD @ 2025</div>
      </div>
    </footer>
  );
}
