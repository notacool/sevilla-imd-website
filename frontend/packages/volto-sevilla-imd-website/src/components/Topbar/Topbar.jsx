/**
 * Topbar component.
 * @module components/Header/Topbar clima soleado
 */

import React from 'react';
//import '../../../theme/_topbar.scss';
import 'volto-sevilla-imd-website/theme/_topbar.scss';

// Image assets
const imgIconWeather = 'volto-sevilla-imd-website/icons/sunny-climate.svg.svg';
const imgLine = 'volto-sevilla-imd-website/icons/vertical-line.svg';
const imgIconFacebook = 'volto-sevilla-imd-website/icons/social/facebook-default.svg';
const imgIconX = 'volto-sevilla-imd-website/icons/social/x-default.svg';
const imgIconYoutube = 'volto-sevilla-imd-website/icons/social/youtube-default.svg';
const imgIconInsta = 'volto-sevilla-imd-website/icons/social/instagram-default.svg';

const Topbar = () => {
  return (
    <div className="topbar" data-name="topbar">
      <div className="topbar-content">
        <div className="weather-widget">
          <div className="weather-data">
            <div className="weather-icon">
              <img alt="Weather" src={imgIconWeather} />
            </div>
            <div className="weather-divider">
              <div className="divider-line">
                <div className="divider-line-inner">
                  <img alt="" src={imgLine} />
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
              <img alt="Facebook" src={imgIconFacebook} />
            </a>
            <a href="https://x.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img alt="X" src={imgIconX} />
            </a>
            <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img alt="Youtube" src={imgIconYoutube} />
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img alt="Instagram" src={imgIconInsta} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;