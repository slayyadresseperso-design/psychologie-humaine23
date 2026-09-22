/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: []
  },
  // S'assure que le PDF privé (assets/ebook.pdf, hors de /public) est bien
  // embarqué dans la fonction serverless de téléchargement sur Vercel.
  outputFileTracingIncludes: {
    "/api/download/[token]": ["./assets/**"]
  }
};

export default nextConfig;
