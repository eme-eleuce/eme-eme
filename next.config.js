/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {

  images: {
    domains: [
      'cbupghhlrkrzqpwiaulr.supabase.co',
      'images.unsplash.com',
    ]
  }
}


