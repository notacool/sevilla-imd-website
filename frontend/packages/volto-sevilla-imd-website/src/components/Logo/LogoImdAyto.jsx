/**
 * LogoImdAyto component.
 * @module components/Logo/LogoImdAyto
 */

import { defineMessages, useIntl } from 'react-intl';
import { Image } from 'semantic-ui-react';
import ImdAytoLogo from 'volto-sevilla-imd-website/theme/static/logos/logo_imd_ayto.svg';

const messages = defineMessages({
  ayto_sevilla: {
    id: 'Ayuntamiento de Sevilla',
    defaultMessage: 'Ayuntamiento de Sevilla',
  },
});

/**
 * LogoImdAyto component class.
 * @function LogoImdAyto
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoImdAyto = ({ className }) => {
  const intl = useIntl();
  return (
    <Image
      src={ImdAytoLogo}
      alt={intl.formatMessage(messages.ayto_sevilla)}
      title={intl.formatMessage(messages.ayto_sevilla)}
      className={`logoImdAyto ${className}`}
      width={'235px'}
      height={'68px'}
    />
  );
};

export default LogoImdAyto;
