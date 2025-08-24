import React from 'react';
import { Container, Grid, Header, Image, Card } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
// import NotificationsIcon from './images/icons/notifications.svg';
import NotificationsIcon from './notifications.svg';
// import FeaturedIcon from './images/icons/featured.svg';
import FeaturedIcon from './featured.svg';
import LinkExternalIcon from './link-external.svg';
// import SliderLeftArrowDefaultIcon from './images/icons/slider-left-arrow-default.svg';
import SliderLeftArrowDefaultIcon from './slider-left-arrow-default.svg';
// import SliderRightArrowDefaultIcon from './images/icons/slider-right-arrow-default.svg';
import SliderRightArrowDefaultIcon from './slider-right-arrow-default.svg';
// import AvisosImg from './images/featured/avisos.jpg';
import AvisosImg from './avisos.jpg';
// import PerfilImg from './images/featured/perfil.jpg';
import PerfilImg from './perfil.jpg';
// import TransparenciaImg from './images/featured/transparencia.jpg';
import TransparenciaImg from './transparencia.jpg';
// import AntifraudeImg from './images/featured/antifraude.jpg';
import AntifraudeImg from './antifraude.jpg';
import 'volto-sevilla-imd-website/theme/_s3.scss';

const S3 = () => {
  return (
    <div className="section-s3">
      <Container>
        <div className="section-header">
          <Header as="h2" className="section-title">
            Actualidad
          </Header>
        </div>

        <div className="news-section">
          <div className="section-subtitle">
            <div className="icon">
              <Icon name={NotificationsIcon} size="42px" />
              {/* <Image src={flattenToAppURL('/++theme++imd-theme/images/icons/notifications.svg')} alt="AVISOS" /> */}
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
                          <Icon name={LinkExternalIcon} size="24px" />
                          {/* <Image src={LinkExternalIcon} alt="Visita su web" /> */}
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
                          <Icon name={LinkExternalIcon} size="24px" />
                          {/* <Image src={LinkExternalIcon} alt="Visita su web" /> */}
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
                          <Icon name={LinkExternalIcon} size="24px" />
                          {/* <Image src={LinkExternalIcon} alt="Visita su web" /> */}
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
              {/* <Image src={FeaturedIcon} alt="TE DESTACAMOS" /> */}
              <Icon name={FeaturedIcon} size="42px" />
            </div>
            <Header as="h3">TE DESTACAMOS</Header>
          </div>

          <Grid columns={3}>
            <Grid.Row>
              {[
                {
                  title: 'Perfil del contratante',
                  description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
                  // image: {PerfilImg},
                  // image: 'https://2024.ploneconf.org/en/news/all-good-things-and-see-you-in-jyvaskyla-finland/@@images/image-1600-a85e2b77916737ede1959c4ad35076d2.jpeg',
                  link: '#',
                },
                {
                  title: 'Portal de transparencia',
                  description: 'Visita la web del portal de transparencia del Ayuntamiento de Sevilla.',
                  // image: {TransparenciaImg},
                  // image: 'https://2024.ploneconf.org/en/news/schedule-announced-for-the-2024-plone-conference/@@images/image-1600-803bb2b55fbb3e1667ce2110afe9deca.jpeg',
                  link: '#',
                },
                {
                  title: 'Canal de denuncias antifraude',
                  description: 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.',
                  // image: {AntifraudeImg},
                  // image: 'https://2024.ploneconf.org/en/assets/tse.jpg/@@images/image-1600-d80644f6518e21555e9bb6186fe851dc.jpeg',
                  link: '#',
                }
              ].map((item, index) => (
                <Grid.Column key={index}>
                  <Card className="featured-card">
                    <div className="card-content">
                      {!item?.image && (
                        <img src={DefaultImageSVG} alt="Default Image" />
                      )}
                      {/* {item?.image && (
                        <img
                          // src={flattenToAppURL(item.image)}
                          src={item.image}
                          alt={item.title}
                        />
                      )} */}
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
            <div className="slider-arrows">
              <button className="arrow prev">
                {/* <Image src={flattenToAppURL('/++theme++imd-theme/icons/arrow-left.svg')} alt="Previous" /> */}
                <Icon name={SliderLeftArrowDefaultIcon} size="62px" />
              </button>
              <button className="arrow next">
                {/* <Image src={flattenToAppURL('/++theme++imd-theme/icons/arrow-right.svg')} alt="Next" /> */}
                <Icon name={SliderRightArrowDefaultIcon} size="62px" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default S3;
