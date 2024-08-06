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
        MONGO_URI: "mongodb+srv://guliadev:guliadev@cluster0.mwnpa4c.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", 
      },
};

export default nextConfig;
