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
<<<<<<< HEAD
=======
         
    },
>>>>>>> 90b9b0c (add register and login)

    },
};

export default nextConfig;
