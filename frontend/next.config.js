const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: process.env.API_URL,
    API_URL_ALL: process.env.API_URL_ALL,
  },
  i18n: {
    locales: ["pt-BR", "en", "es", "jp"],
    defaultLocale: "pt-BR",
    localeDetection: true,
  },
};
