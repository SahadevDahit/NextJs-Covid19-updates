/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        url: process.env.url,
        rapidhostkey: process.env.rapidhostkey,
        rapidapikey: process.env.rapidapikey,
    }
}

module.exports = nextConfig