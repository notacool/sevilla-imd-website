/**
 * S3 component.
 * @module components/Sections/s3
 */

import React from 'react';
import { Container, Grid, Header, Image, Card } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import NotificationsIcon from 'volto-sevilla-imd-website/icons/notifications.png';
import FeaturedIcon from 'volto-sevilla-imd-website/icons/featured.png';
import LinkExternalIcon from 'volto-sevilla-imd-website/icons/link-external.png';
import ArrowLeftSliderDefaultIcon from 'volto-sevilla-imd-website/icons/arrow-left-slider-default.png';
import ArrowRightSliderDefaultIcon from 'volto-sevilla-imd-website/icons/arrow-right-slider-default.png';
import AvisosImg from 'volto-sevilla-imd-website/components/Sections/avisos.jpg';
import PerfilImg from 'volto-sevilla-imd-website/components/Sections/perfil.jpg';
import TransparenciaImg from 'volto-sevilla-imd-website/components/Sections/transparencia.jpg';
import AntifraudeImg from 'volto-sevilla-imd-website/components/Sections/antifraude.jpg';

const S3 = () => {
  return (
    <div className="section-s3">
      {/* <Container> */}
        <div className="section-header">
          <Header as="h2" className="section-title">
            Actualidad
          </Header>
        </div>

        <div className="news-section">
          <div className="section-subtitle">
            <div className="icon">
              <Image src={NotificationsIcon} alt="Avisos" />
            </div>
            <Header as="h3">AVISOS</Header>
          </div>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <div className="card-content">
                    <Image src={AvisosImg} />
                    <div className="card-body">
                      <p className="card-label">Inscripción abierta</p>
                      <Header as="h4">Zurich Maratón de Sevilla 2026</Header>
                      <UniversalLink href="#" className="card-link">
                        Más información
                        <span className="icon-arrow">
                          <Image src={LinkExternalIcon} alt="Visita su web" />
                        </span>
                      </UniversalLink>
                    </div>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="card-content">
                    <Image src={DefaultImageSVG} />
                    <div className="card-body">
                      <p className="card-label">Inscripción abierta</p>
                      <Header as="h4">Carrera Parque de María Luísa Coca-Cola</Header>
                      <UniversalLink href="#" className="card-link">
                        Más información
                        <span className="icon-arrow">
                          <Image src={LinkExternalIcon} alt="Visita su web" />
                        </span>
                      </UniversalLink>
                    </div>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="card-content">
                    <Image src={DefaultImageSVG} />
                    <div className="card-body">
                      <p className="card-label">Inscripción abierta</p>
                      <Header as="h4">Otros eventos deportivos</Header>
                      <UniversalLink href="#" className="card-link">
                        Más información
                        <span className="icon-arrow">
                          <Image src={LinkExternalIcon} alt="Visita su web" />
                        </span>
                      </UniversalLink>
                    </div>
                  </div>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className="featured-section">
          <div className="section-subtitle">
            <div className="icon">
              <Image src={FeaturedIcon} alt="TE DESTACAMOS" />
            </div>
            <Header as="h3">TE DESTACAMOS</Header>
          </div>

          <div className="slider-controls">
            <div className="slider-arrows">
              <button className="arrow prev">
                <Image src={ArrowLeftSliderDefaultIcon} alt="Anterior" />
              </button>
              <button className="arrow next">
                <Image src={ArrowRightSliderDefaultIcon} alt="Siguiente" />
              </button>
            </div>
          </div>

          <Grid columns={3}>
            <Grid.Row>
              {[
                {
                  title: 'Perfil del contratante',
                  description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
                  image: {PerfilImg},
                  link: '#',
                },
                {
                  title: 'Portal de transparencia',
                  description: 'Visita la web del portal de transparencia del Ayuntamiento de Sevilla.',
                  image: {TransparenciaImg},
                  link: '#',
                },
                {
                  title: 'Canal de denuncias antifraude',
                  description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
                  image: {AntifraudeImg},
                  link: '#',
                }
              ].map((item, index) => (
                <Grid.Column key={index}>
                  <Card className="featured-card">
                    <div className="card-content">
                      {!item?.image && (
                        <img src={DefaultImageSVG} alt="Default Image" />
                      )}
                      {item?.image && (
                        <img
                          // src={flattenToAppURL(item.image)}
                          src={item.image}
                          alt={item.title}
                        />
                      )}
                      <div className="card-body">
                        <div className="card-line"></div>
                        <Header as="h4">{item.title}</Header>
                        <p>{item.description}</p>
                        <UniversalLink href={item.link} className="card-link">
                          Visita su web
                          <span className="icon-arrow">
                            <Image src={LinkExternalIcon} alt="Visita su web" />
                          </span>
                        </UniversalLink>
                      </div>
                    </div>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>

          <div className="slider-controls">
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default S3;
