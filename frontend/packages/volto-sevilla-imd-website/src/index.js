const applyConfig = (config) => {
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['es'];
  config.settings.defaultLanguage = 'es';

  return config;
};

export default applyConfig;
