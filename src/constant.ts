export const getThemeOrigin = () => {
  return isDev() ? 'http://localhost:5174/' : 'https://lizuncong.github.io';
};

export const getIframeSrc = () => {
  return isDev() ? 'http://localhost:5174/' : 'https://lizuncong.github.io/arise-theme/';
};
export const isDev = () => {
  return !location.host.includes('lizuncong.github.io');
};
