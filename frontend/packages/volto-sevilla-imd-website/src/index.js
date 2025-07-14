import installSettings from 'volto-sevilla-imd-website/config/settings';

const applyConfig = (config) => {
  installSettings(config);
  return config;
};

export default applyConfig;
