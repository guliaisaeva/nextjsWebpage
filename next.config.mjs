/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'unsplash.com',
              pathname: '/**',
            },
          ],

    },
};

export default nextConfig;
