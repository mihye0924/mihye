/** @type {import('next').NextConfig} */
const path = require('path') 

const nextConfig = { 
  basePath: "/mihye",
  reactStrictMode: true,
  assetPrefix: 
    process.env.NODE_ENV === "production"
    ? "https://mihye0924.github.io/mihye"
    : "",  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/scss/_variables.scss";`
  },
}
module.exports = nextConfig
