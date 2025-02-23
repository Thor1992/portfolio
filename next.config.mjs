<<<<<<< HEAD
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

=======
>>>>>>> master
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
<<<<<<< HEAD
=======
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
>>>>>>> master
  },
  // 移除可能导致问题的实验性配置
  experimental: {
    webpackBuildWorker: false
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

export default nextConfig
