/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // for static server.
  env: {},
  // Will only be available on the server side
  serverRuntimeConfig: {},
  // Will be available on both server and client
  publicRuntimeConfig: {
    // [CAUTION] [at least GAE] env should be defined here to load env on client side by npm start(production mode).
    // env will not be loaded even they are set env:{} part here or other env setting.
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
  },
};

module.exports = nextConfig;
