/**
 * Logo component.
 * @module components/Logo/Logo
 */

import { defineMessages, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import config from '@plone/volto/registry';
import { UniversalLink } from '@plone/volto/components';
import { toBackendLang } from '@plone/volto/helpers';
import LogoImdAyto from './LogoImdAyto';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  site: {
    id: 'Instituto Municipal de Deportes - Ayuntamiento de Sevilla',
    defaultMessage: 'Instituto Municipal de Deportes - Ayuntamiento de Sevilla',
  },
});

const Logo = () => {
  const { settings } = config;
  const lang = useSelector((state) => state.intl.locale);
  const intl = useIntl();

  const logoUrl =
    settings.defaultLanguage === lang
      ? flattenToAppURL('/')
      : flattenToAppURL(`/${toBackendLang(lang)}`);

  return (
    <UniversalLink href={logoUrl} title={intl.formatMessage(messages.site)}>
      <LogoImdAyto className={'main'} />
    </UniversalLink>
  );
};

export default Logo;
