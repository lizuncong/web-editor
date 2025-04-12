import './styles/normalize.css';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './locales/en.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation,
    },
  },
});
import { RouterProvider } from 'react-router';

import router from './routes';
function App() {
  return <RouterProvider router={router} />;
}

export default App;
