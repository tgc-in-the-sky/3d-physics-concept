import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack: (config, { isServer }) => {
    // Avoid loading Three.js on the server
    if (!isServer) {
      config.externals = [...(config.externals || []), 'canvas'];
    }
    
    // Handle 3D model files
    config.module.rules.push({
      test: /\.(glb|gltf|hdr)$/,
      type: 'asset/resource',
    });

    // Handle shader files if you're using them
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
};

export default nextConfig; 