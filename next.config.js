/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer, dev }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });
        return config;
    },
}

module.exports = nextConfig;