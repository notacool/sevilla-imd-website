import installSettings from 'volto-sevilla-imd-website/config/settings';
import blocksSettings from 'volto-sevilla-imd-website/config/blocks';
import gdprPrivacySettings from 'volto-sevilla-imd-website/config/addons/volto-gdpr-privacy';

const applyConfig = (config) => {
  installSettings(config);
  blocksSettings(config);

  // GDPR Privacy
  config.settings['volto-gdpr-privacy'] = {
    ...config.settings['volto-gdpr-privacy'],
    defaultPanelConfig: gdprPrivacySettings,
  };

  return config;
};

export default applyConfig;
