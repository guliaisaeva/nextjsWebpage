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
    env: {
    MONGO_URI: process.env.MONGO_URI,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
};

export default nextConfig;
