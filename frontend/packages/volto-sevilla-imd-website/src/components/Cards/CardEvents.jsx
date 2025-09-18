/**
 * Card Events component.
 * @module components/Cards/CardEvents
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import ArrowRightDiagonalYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-diagonal-yellow.png';

const CardEvents = ({
  status,
  title,
  image,
  link,
  linkText = 'Hiperlink',
}) => {
  return (
    <div className="card-events">
      <div className="card-content">
        <div className="event-content">
          {/* Notification Image */}
          <div className="event-image">
            <div
              className="image-wrapper"
              style={{
                backgroundImage: `url(${image || DefaultImageSVG})`,
              }}
            />
          </div>

          {/* Notification Details */}
          <div className="event-details">
            <div className="text-content">
              <div className="event-status">
                {status || 'Inscripción abierta'}
              </div>

              <h3 className="event-title">
                {title || 'Zurich Maratón de Sevilla 2026'}
              </h3>

              {link && (
                <UniversalLink
                  href={link}
                  className="event-link"
                  title="Más información"
                >
                  <span>{linkText}</span>
                  <div className="icon">
                    <Image src={ArrowRightDiagonalYellowIcon} alt="Más información" />
                  </div>
                </UniversalLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvents;
