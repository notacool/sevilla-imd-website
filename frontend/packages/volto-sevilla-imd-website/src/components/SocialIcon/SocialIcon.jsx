/**
 * SocialIcon component.
 * @module components/SocialIcon/SocialIcon
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * SocialIcon component - A reusable social media icon with hover effect
 * @param {Object} props Component properties
 * @returns {JSX} Markup
 */
const SocialIcon = ({ name, url, defaultIcon, hoverIcon, width }) => {
  const [icon, setIcon] = useState(defaultIcon);

  return (
    <a
      href={url}
      target="_blank"
      title={name}
      className="social-icon"
      rel="noopener noreferrer"
    >
      <img
        src={icon}
        width={width || "24px"}
        alt={name}
        onMouseOver={() => setIcon(hoverIcon)}
        onMouseOut={() => setIcon(defaultIcon)}
      />
    </a>
  );
};

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  defaultIcon: PropTypes.string.isRequired,
  hoverIcon: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default SocialIcon;
