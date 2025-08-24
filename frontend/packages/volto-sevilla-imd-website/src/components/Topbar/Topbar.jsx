/**
 * Topbar component.
 * @module components/Topbar/Topbar
 */

import React from 'react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import weatherIcon from '../../icons/weather/sunny-climate.svg';
import verticalLine from '../../icons/vertical-line.svg';
import facebookIcon from '../../icons/social/facebook-default.svg';
import twitterIcon from '../../icons/social/twitter-default.svg';
import youtubeIcon from '../../icons/social/youtube-default.svg';
import instagramIcon from '../../icons/social/instagram-default.svg';

import 'volto-sevilla-imd-website/theme/_topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar" data-name="topbar">
      <div className="topbar-content">
        <div className="weather-widget">
          <div className="weather-data">
            <div className="weather-icon">
              <Icon name={weatherIcon} size="38px" />
            </div>
            <div className="weather-divider">
              <div className="divider-line">
                <div className="divider-line-inner">
                  <Icon name={verticalLine} size="24px" />
                </div>
              </div>
            </div>
            <div className="weather-city">
              <p>Sevilla</p>
            </div>
            <div className="weather-temperature">
              <div className="current-temp">
                <p>32º</p>
              </div>
              <div className="temp-range">
                <p>28-24º</p>
              </div>
            </div>
          </div>
        </div>
        <div className="social-widget">
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Icon name={facebookIcon} size="24px" />
            </a>
            <a href="https://x.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Icon name={twitterIcon} size="24px" />
            </a>
            <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Icon name={youtubeIcon} size="24px" />
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Icon name={instagramIcon} size="24px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
