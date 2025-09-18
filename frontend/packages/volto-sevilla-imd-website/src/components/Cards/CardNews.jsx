/**
 * Card News component.
 * @module components/Cards/CardNews
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';

const CardNews = ({
  key,
  title,
  description,
  image,
  date,
  isFeatured = false,
  className,
  link,
}) => {
  return (
    <div key={key} className={classNames('card-news', { featured: isFeatured }, className)}>
      <div className="card-content">
        {/* Background Layer */}
        <div className="card-background">
          <div className="bottom-bg" />
          <div className="top-bg" />
        </div>

        {/* Card Image */}
        <div className="card-image">
          <div
            className="image-wrapper"
            style={{
              backgroundImage: `url(${image || DefaultImageSVG})`,
            }}
          />
        </div>

        {/* Card Text Content */}
        <div className="card-text">
          <div className="indicator-line" />

          {link && (
            <UniversalLink
              href={link}
              className="notification-link"
              title={title || "Más información"}
            >
              <h3 className="card-title">
                {title || 'Título de la noticia...lorem ipsum neque qui sit amet.'}
              </h3>
            </UniversalLink>
          )}

            {/* <h3 className="card-title">
              {title || 'Título de la noticia...lorem ipsum neque qui sit amet.'}
            </h3> */}

          <p className="card-description">
            {description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit condim entum justo quis pellen et dignissim amet...'}
          </p>

          <p className="card-date">
            {date ? moment(date).format('DD/MM/YYYY') : '00/00/0000'}
          </p>
        </div>
      </div>
    </div>
  );
};

CardNews.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
  link: PropTypes.string,
};

export default CardNews;