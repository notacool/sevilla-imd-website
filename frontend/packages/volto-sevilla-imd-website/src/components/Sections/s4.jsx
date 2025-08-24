import React from 'react';
import { Container, Grid, Header, Image, Button } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import Icon from '@plone/volto/components/theme/Icon/Icon';
// import { flattenToAppURL } from '@plone/volto/helpers';
// import { format } from 'date-fns';
import SliderLeftArrowDefaultIcon from './slider-left-arrow-default.svg';
import SliderRightArrowDefaultIcon from './slider-right-arrow-default.svg';
import 'volto-sevilla-imd-website/theme/_s4.scss';

const S4 = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Título de la noticia...lorem ipsum neque qui sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condim entum justo quis pellen et dignissim amet...',
      date: '2025-08-24',
      // image: '/++theme++imd-theme/images/news/news1.jpg',
      image: '',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Título de la noticia...lorem ipsum neque qui sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condim entum justo quis pellen et dignissim amet...',
      date: '2025-08-23',
      // image: '/++theme++imd-theme/images/news/news2.jpg',
      image: '',
    },
    {
      id: 3,
      title: 'Título de la noticia...lorem ipsum neque qui sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condim entum justo quis pellen et dignissim amet...',
      date: '2025-08-22',
      // image: '/++theme++imd-theme/images/news/news3.jpg',
      image: '',
    },
  ];

  return (
    <div className="section-s4">
      <Container>
        <div className="section-header">
          <Header as="h2" className="section-title">
            Noticias y eventos
          </Header>
        </div>

        <div className="news-grid">
          <Grid>
            <Grid.Row>
              {/* Featured News */}
              <Grid.Column width={10}>
                {newsItems
                  .filter(item => item.isFeatured)
                  .map(item => (
                    <div key={item.id} className="news-card featured">
                      <div className="card-content">
                        <div className="image-wrapper">
                          <img src={DefaultImageSVG}
                            alt={item.title}
                            className="news-image"
                          />
                        </div>
                        <div className="card-body">
                          <div className="indicator-line"></div>
                          <Header as="h3">{item.title}</Header>
                          <p className="description">{item.description}</p>
                          {/* <p className="date">{format(new Date(item.date), 'dd/MM/yyyy')}</p> */}
                          <p className="date">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </Grid.Column>

              {/* Regular News */}
              <Grid.Column width={6}>
                <div className="regular-news">
                  {newsItems
                    .filter(item => !item.isFeatured)
                    .map(item => (
                      <div key={item.id} className="news-card">
                        <div className="card-content">
                          <div className="image-wrapper">
                            <img src={DefaultImageSVG}
                              alt={item.title}
                              className="news-image"
                            />
                          </div>
                          <div className="card-body">
                            <div className="indicator-line"></div>
                            <Header as="h3">{item.title}</Header>
                            <p className="description">{item.description}</p>
                            {/* <p className="date">{format(new Date(item.date), 'dd/MM/yyyy')}</p> */}
                            <p className="date">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="slider-controls">
                  <div className="slider-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="slider-arrows">
                    <button className="arrow prev" aria-label="Previous slide">
                      {/* <Image src={flattenToAppURL('/++theme++imd-theme/icons/arrow-left.svg')}
                        alt="" /> */}
                      <Icon name={SliderLeftArrowDefaultIcon} size="62px" />
                    </button>
                    <button className="arrow next" aria-label="Next slide">
                      {/* <Image src={flattenToAppURL('/++theme++imd-theme/icons/arrow-right.svg')}
                        alt="" /> */}
                      <Icon name={SliderRightArrowDefaultIcon} size="62px" />
                    </button>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className="more-news-button">
          <Button className="more-news">
            MÁS NOTICIAS
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default S4;
