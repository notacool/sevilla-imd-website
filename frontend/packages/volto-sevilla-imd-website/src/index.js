import installSettings from 'volto-sevilla-imd-website/config/settings';
import gdprPrivacySettings from 'volto-sevilla-imd-website/config/addons/volto-gdpr-privacy';

const applyConfig = (config) => {
  installSettings(config);

  // GDPR Privacy
  config.settings['volto-gdpr-privacy'] = {
    ...config.settings['volto-gdpr-privacy'],
    defaultPanelConfig: gdprPrivacySettings,
  };

  return config;
};

export default applyConfig;
