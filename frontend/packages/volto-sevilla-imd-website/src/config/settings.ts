import type { ConfigType } from '@plone/registry';

export default function install(config: ConfigType) {
  // Main
  config.settings.siteLabel = 'Instituto Municipal de Deportes - Ayuntamiento de Sevilla';

  // Language
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['es'];
  config.settings.defaultLanguage = 'es';

  // Display Plone Login Form
  config.settings.showPloneLogin = true;

  // Navigation
  config.settings.navDepth = 3;

  // Expanders
  config.settings.apiExpanders = [
    ...config.settings.apiExpanders,
    {
      match: '',
      GET_CONTENT: ['inherit'],
      querystring: {
        'expand.inherit.behaviors':
          'voltolighttheme.header',
      },
    },
  ];
  return config;
}
