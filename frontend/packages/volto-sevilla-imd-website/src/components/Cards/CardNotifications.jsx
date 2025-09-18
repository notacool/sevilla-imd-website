/**
 * Card Notifications component.
 * @module components/Cards/CardNotifications
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Image } from 'semantic-ui-react';
import ArrowRightDiagonalYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-diagonal-yellow.png';
import CardFavoritedIcon from 'volto-sevilla-imd-website/icons/card-favorited.png';

const CardNotifications = ({
  title,
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
                backgroundImage: `url(${CardFavoritedIcon})`,
              }}
            />
          </div>

          {/* Notification Details */}
          <div className="notification-details">
            <div className="text-content">

              <h3 className="notification-title">
                {title || 'Zurich Maratón de Sevilla 2026'}
              </h3>

              {link && (
                <UniversalLink
                  href={link}
                  className="notification-link"
                  title={title || "Más información" }
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
