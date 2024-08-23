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
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
