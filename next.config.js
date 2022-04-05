/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "tailwindcss.com",
      "external-content.duckduckgo.com",
      "images.pexels.com",
      "images.unsplash.com",
    ],
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};
