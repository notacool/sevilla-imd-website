/**
 * Card Events component.
 * @module components/Cards/CardEvents
 */

import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
// import 'volto-sevilla-imd-website/theme/components/_card_events.scss';

const CardEvents = ({
  title,
  description,
  image,
  date,
  isFeatured = false,
}) => {
  return (
    <div className={classNames('card-events', { featured: isFeatured })}>
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

          <h3 className="card-title">
            {title || 'Título de la noticia...lorem ipsum neque qui sit amet.'}
          </h3>

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

export default CardEvents;
