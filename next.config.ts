/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, {dev, isServer}) =>{
     if(dev){
      config.devtool = 'source-map';
     }

     return config;
  }
};

export default nextConfig;
