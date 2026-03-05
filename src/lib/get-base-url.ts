export function getBaseUrl(): string {
  const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProdUrl) {
    return `https://www.${vercelProdUrl}`;
  } else {
    return `http://localhost:3000`;
  }
}
