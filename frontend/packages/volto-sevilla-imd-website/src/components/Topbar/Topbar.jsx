/**
 * Topbar component.
 * @module components/Topbar/Topbar
 */

import React, { useEffect, useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import SocialIcon from 'volto-sevilla-imd-website/components/SocialIcon';
import cx from 'classnames';
import verticalLine from 'volto-sevilla-imd-website/icons/vertical-line.svg';
import facebookIcon from 'volto-sevilla-imd-website/icons/social/facebook-default.png';
import facebookHoverIcon from 'volto-sevilla-imd-website/icons/social/facebook-hover.png';
import twitterIcon from 'volto-sevilla-imd-website/icons/social/twitter-default.png';
import twitterHoverIcon from 'volto-sevilla-imd-website/icons/social/twitter-hover.png';
import youtubeIcon from 'volto-sevilla-imd-website/icons/social/youtube-default.png';
import youtubeHoverIcon from 'volto-sevilla-imd-website/icons/social/youtube-hover.png';
import instagramIcon from 'volto-sevilla-imd-website/icons/social/instagram-default.png';
import instagramHoverIcon from 'volto-sevilla-imd-website/icons/social/instagram-hover.png';

import clima11Icon from 'volto-sevilla-imd-website/icons/weather/temps/11.png';
import clima11nIcon from 'volto-sevilla-imd-website/icons/weather/temps/11n.png';
import clima12Icon from 'volto-sevilla-imd-website/icons/weather/temps/12.png';
import clima12nIcon from 'volto-sevilla-imd-website/icons/weather/temps/12n.png';
import clima13Icon from 'volto-sevilla-imd-website/icons/weather/temps/13.png';
import clima13nIcon from 'volto-sevilla-imd-website/icons/weather/temps/13n.png';
import clima14Icon from 'volto-sevilla-imd-website/icons/weather/temps/14.png';
import clima14nIcon from 'volto-sevilla-imd-website/icons/weather/temps/14n.png';
import clima15Icon from 'volto-sevilla-imd-website/icons/weather/temps/15.png';
import clima15nIcon from 'volto-sevilla-imd-website/icons/weather/temps/15n.png';
import clima16Icon from 'volto-sevilla-imd-website/icons/weather/temps/16.png';
import clima16nIcon from 'volto-sevilla-imd-website/icons/weather/temps/16n.png';
import clima17Icon from 'volto-sevilla-imd-website/icons/weather/temps/17.png';
import clima17nIcon from 'volto-sevilla-imd-website/icons/weather/temps/17n.png';
import clima23Icon from 'volto-sevilla-imd-website/icons/weather/temps/23.png';
import clima23nIcon from 'volto-sevilla-imd-website/icons/weather/temps/23n.png';
import clima24Icon from 'volto-sevilla-imd-website/icons/weather/temps/24.png';
import clima24nIcon from 'volto-sevilla-imd-website/icons/weather/temps/24n.png';
import clima25Icon from 'volto-sevilla-imd-website/icons/weather/temps/25.png';
import clima25nIcon from 'volto-sevilla-imd-website/icons/weather/temps/25n.png';
import clima26Icon from 'volto-sevilla-imd-website/icons/weather/temps/26.png';
import clima26nIcon from 'volto-sevilla-imd-website/icons/weather/temps/26n.png';
import clima33Icon from 'volto-sevilla-imd-website/icons/weather/temps/33.png';
import clima33nIcon from 'volto-sevilla-imd-website/icons/weather/temps/33n.png';
import clima34Icon from 'volto-sevilla-imd-website/icons/weather/temps/34.png';
import clima34nIcon from 'volto-sevilla-imd-website/icons/weather/temps/34n.png';
import clima35Icon from 'volto-sevilla-imd-website/icons/weather/temps/35.png';
import clima35nIcon from 'volto-sevilla-imd-website/icons/weather/temps/35n.png';
import clima36Icon from 'volto-sevilla-imd-website/icons/weather/temps/36.png';
import clima36nIcon from 'volto-sevilla-imd-website/icons/weather/temps/36n.png';
import clima43Icon from 'volto-sevilla-imd-website/icons/weather/temps/43.png';
import clima43nIcon from 'volto-sevilla-imd-website/icons/weather/temps/43n.png';
import clima44Icon from 'volto-sevilla-imd-website/icons/weather/temps/44.png';
import clima44nIcon from 'volto-sevilla-imd-website/icons/weather/temps/44n.png';
import clima45Icon from 'volto-sevilla-imd-website/icons/weather/temps/45.png';
import clima45nIcon from 'volto-sevilla-imd-website/icons/weather/temps/45n.png';
import clima46Icon from 'volto-sevilla-imd-website/icons/weather/temps/46.png';
import clima46nIcon from 'volto-sevilla-imd-website/icons/weather/temps/46n.png';
import clima51Icon from 'volto-sevilla-imd-website/icons/weather/temps/51.png';
import clima51nIcon from 'volto-sevilla-imd-website/icons/weather/temps/51n.png';
import clima52Icon from 'volto-sevilla-imd-website/icons/weather/temps/52.png';
import clima52nIcon from 'volto-sevilla-imd-website/icons/weather/temps/52n.png';
import clima53Icon from 'volto-sevilla-imd-website/icons/weather/temps/53.png';
// import clima53nIcon from 'volto-sevilla-imd-website/icons/weather/temps/53n.png';
import clima54Icon from 'volto-sevilla-imd-website/icons/weather/temps/54.png';
import clima54nIcon from 'volto-sevilla-imd-website/icons/weather/temps/54n.png';
import clima61Icon from 'volto-sevilla-imd-website/icons/weather/temps/61.png';
import clima61nIcon from 'volto-sevilla-imd-website/icons/weather/temps/61n.png';
import clima62Icon from 'volto-sevilla-imd-website/icons/weather/temps/62.png';
import clima62nIcon from 'volto-sevilla-imd-website/icons/weather/temps/62n.png';
import clima63Icon from 'volto-sevilla-imd-website/icons/weather/temps/63.png';
import clima63nIcon from 'volto-sevilla-imd-website/icons/weather/temps/63n.png';
import clima64Icon from 'volto-sevilla-imd-website/icons/weather/temps/64.png';
import clima64nIcon from 'volto-sevilla-imd-website/icons/weather/temps/64n.png';
import clima71Icon from 'volto-sevilla-imd-website/icons/weather/temps/71.png';
import clima71nIcon from 'volto-sevilla-imd-website/icons/weather/temps/71n.png';
import clima72Icon from 'volto-sevilla-imd-website/icons/weather/temps/72.png';
import clima72nIcon from 'volto-sevilla-imd-website/icons/weather/temps/72n.png';
import clima73Icon from 'volto-sevilla-imd-website/icons/weather/temps/73.png';
// import clima73nIcon from 'volto-sevilla-imd-website/icons/weather/temps/73n.png';
import clima74Icon from 'volto-sevilla-imd-website/icons/weather/temps/74.png';
// import clima74nIcon from 'volto-sevilla-imd-website/icons/weather/temps/74n.png';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Function to get weather icon based on sky state and time
const getWeatherIcon = (skyStateText, hour) => {
  // Check if it's night time (between 20:00 and 06:00)
  const isNight = hour >= 20 || hour < 6;
  const suffix = isNight ? 'n' : '';

  // Map of imported icons
  const weatherIcons = {
    '11': isNight ? clima11nIcon : clima11Icon,
    '12': isNight ? clima12nIcon : clima12Icon,
    '13': isNight ? clima13nIcon : clima13Icon,
    '14': isNight ? clima14nIcon : clima14Icon,
    '15': isNight ? clima15nIcon : clima15Icon,
    '16': isNight ? clima16nIcon : clima16Icon,
    '17': isNight ? clima17nIcon : clima17Icon,
    '23': isNight ? clima23nIcon : clima23Icon,
    '24': isNight ? clima24nIcon : clima24Icon,
    '25': isNight ? clima25nIcon : clima25Icon,
    '26': isNight ? clima26nIcon : clima26Icon,
    '33': isNight ? clima33nIcon : clima33Icon,
    '34': isNight ? clima34nIcon : clima34Icon,
    '35': isNight ? clima35nIcon : clima35Icon,
    '36': isNight ? clima36nIcon : clima36Icon,
    '43': isNight ? clima43nIcon : clima43Icon,
    '44': isNight ? clima44nIcon : clima44Icon,
    '45': isNight ? clima45nIcon : clima45Icon,
    '46': isNight ? clima46nIcon : clima46Icon,
    '51': isNight ? clima51nIcon : clima51Icon,
    '52': isNight ? clima52nIcon : clima52Icon,
    '53': isNight ? clima53Icon : clima53Icon,
    '54': isNight ? clima54nIcon : clima54Icon,
    '61': isNight ? clima61nIcon : clima61Icon,
    '62': isNight ? clima62nIcon : clima62Icon,
    '63': isNight ? clima63nIcon : clima63Icon,
    '64': isNight ? clima64nIcon : clima64Icon,
    '71': isNight ? clima71nIcon : clima71Icon,
    '72': isNight ? clima72nIcon : clima72Icon,
    '73': isNight ? clima73Icon : clima73Icon,
    '74': isNight ? clima74Icon : clima74Icon,
  };

  // Remove any non-numeric characters from skyStateText (e.g., "12n" becomes "12")
  const cleanStateText = skyStateText?.replace(/[^0-9]/g, '');

  // Return the corresponding icon or a default one
  return weatherIcons[cleanStateText] || clima11Icon;  // Default to clima11Icon if no match
};

const Topbar = (props) => {
  const { className } = props;
  const [forecast, setForecast] = useState([]);
  const [currentTime, setCurrentTime] = useState(moment());

  // Get responsive information from Redux store
  const responsiveName = useSelector((state) => state?.screen?.responsive?.name || 'computer');

  // Effect to update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 60000); // update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const targetUrl = encodeURIComponent('https://www.aemet.es/xml/municipios/localidad_41091.xml');
        const response = await fetch(
          `${CORS_PROXY}${targetUrl}`,
          {
            headers: {
              'Content-Type': 'text/xml',
            },
          }
        );

        const xmlText = await response.text();

        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        // Extract today's forecast
        const today = moment().format('YYYY-MM-DD');
        const days = Array.from(xmlDoc.getElementsByTagName("dia"))
          .filter(day => day.getAttribute("fecha") === today)
          .map((day) => {
            const provinceName = xmlDoc.getElementsByTagName("provincia")[0]?.textContent;
            const date = day.getAttribute("fecha");

            // Get temp values
            const tempMin = day.getElementsByTagName("temperatura")[0]?.getElementsByTagName("minima")[0]?.textContent;
            const tempMax = day.getElementsByTagName("temperatura")[0]?.getElementsByTagName("maxima")[0]?.textContent;

            // Get sky state (estado del cielo)
            const skyStateDescripcion = day.getElementsByTagName("estado_cielo")[0]?.getAttribute("descripcion");
            const skyStateText = day.getElementsByTagName("estado_cielo")[0]?.textContent;

            return {
              provinceName,
              date,
              tempMin,
              tempMax,
              skyStateDescripcion,
              skyStateText,
            };
          });
        console.log("xmlDoc:", xmlDoc);

        setForecast(days);
      } catch (error) {
        console.error("Error fetching AEMET XML:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className={cx('topbar', className, responsiveName)} data-name="topbar">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <div className="topbar-content">
                <div className="weather-wrapper">
                  {forecast.length === 0 ? (
                    <p>🌡️ <FormattedMessage id="loading_forecast" defaultMessage="Loading forecast..." /></p>
                  ) : (
                    <div className="weather-widget">
                      {forecast.slice(0, 1).map((day, i) => (
                        <div key={i} className="weather-data">
                          <div className="weather-icon">
                            <img
                              src={getWeatherIcon(day.skyStateText, currentTime.hour())}
                              alt={day.skyStateDescripcion || "Descripción de clima"}
                            />
                          </div>
                          <div className="weather-divider">
                            <div className="divider-line">
                              <div className="divider-line-inner">
                                <Icon name={verticalLine} size="24px" />
                              </div>
                            </div>
                          </div>
                          <div className="weather-city">
                            <p>{day.provinceName || "Sevilla"}</p>{/* {currentTime.format('HH')} */}
                          </div>
                          <div className="weather-temperature">
                            <div className="current-temp">
                              <p>{day.tempMax}º</p>
                            </div>
                            <div className={cx('temp-range', { 'hide-on-mobile': responsiveName === 'mobile' })}>
                              <p>{day.tempMin}-{day.tempMax}º</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="social-widget">
                  <div className="social-icons">
                    <SocialIcon
                      name="Facebook"
                      url="https://facebook.com"
                      defaultIcon={facebookIcon}
                      hoverIcon={facebookHoverIcon}
                      width="24px"
                    />
                    <SocialIcon
                      name="X"
                      url="https://x.com"
                      defaultIcon={twitterIcon}
                      hoverIcon={twitterHoverIcon}
                      width="24px"
                    />
                    <SocialIcon
                      name="YouTube"
                      url="https://youtube.com"
                      defaultIcon={youtubeIcon}
                      hoverIcon={youtubeHoverIcon}
                      width="24px"
                    />
                    <SocialIcon
                      name="Instagram"
                      url="https://instagram.com"
                      defaultIcon={instagramIcon}
                      hoverIcon={instagramHoverIcon}
                      width="24px"
                    />
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Topbar;
