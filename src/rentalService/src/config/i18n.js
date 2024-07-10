// i18n.js
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

const i18n = i18next.createInstance();

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: '../locales/{{lng}}/translation.json', // Adjust path if necessary
    },
    fallbackLng: 'en',
    preload: ['en', 'fr', 'es'],
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    }
  }).then(() => console.log('i18next initialized successfully'))
  .catch(err => console.error('Error initializing i18next:', err));

export default i18n;
