// @ts-check
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bbpmusiclib.wpenginepowered.com",
      },
      {
        protocol: "https",
        hostname: "d1hx41nm7bdfp5.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "flagicons.lipis.dev",
      },
    ],
  },
  i18n: {
    locales: ["en", "de", "fr", "se", "es"],
    defaultLocale: "en",
  },
};
nextConfig.i18n = undefined;

module.exports = withNextIntl(nextConfig);
