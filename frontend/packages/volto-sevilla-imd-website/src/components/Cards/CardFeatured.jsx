/**
 * Card Featured component.
 * @module components/Cards/CardFeatured
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import LinkExternalIcon from 'volto-sevilla-imd-website/icons/link-external.png';

const CardFeatured = ({
  title,
  description,
  image,
  link,
  linkText = 'Visita su web',
}) => {
  return (
    <div className="card-featured">
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
            {title || 'Perfil del contratante'}
          </h3>

          <p className="card-description">
            {description || 'Visita la web de la Plataforma de contratación del Ministerio de Hacienda.'}
          </p>

          {link && (
            <UniversalLink
              href={link}
              className="card-link"
            >
              <span>{linkText}</span>
              <div className="icon">
                {/* <Icon name={externalLinkIcon} size="62px" /> */}
                <Image src={LinkExternalIcon} alt={title || "Visita su web"} />
              </div>
            </UniversalLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFeatured;
