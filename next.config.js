/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Webinar portal Supabase bucket — hosts the win screenshots
        // and member profile photos that we pull into this site.
        protocol: "https",
        hostname: "ygtrrspqsstgzejvqlfb.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
