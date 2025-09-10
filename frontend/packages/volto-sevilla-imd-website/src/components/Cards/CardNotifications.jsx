/**
 * Card Notifications component.
 * @module components/Cards/CardNotifications
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import ArrowRightDiagonalYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-diagonal-yellow.png';

const CardNotifications = ({
  status,
  title,
  image,
  link,
  linkText = 'Hiperlink',
}) => {
  return (
    <div className="card-notifications">
      <div className="card-content">
        <div className="notification-content">
          {/* Notification Image */}
          <div className="notification-image">
            <div
              className="image-wrapper"
              style={{
                backgroundImage: `url(${image || DefaultImageSVG})`,
              }}
            />
          </div>

          {/* Notification Details */}
          <div className="notification-details">
            <div className="text-content">
              <div className="notification-status">
                {status || 'Inscripción abierta'}
              </div>

              <h3 className="notification-title">
                {title || 'Zurich Maratón de Sevilla 2026'}
              </h3>

              {link && (
                <UniversalLink
                  href={link}
                  className="notification-link"
                >
                  <span>{linkText}</span>
                  <div className="icon">
                    <Image src={ArrowRightDiagonalYellowIcon} title="Más información" />
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

export default CardNotifications;
