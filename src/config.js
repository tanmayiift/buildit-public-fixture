export function ratesUrl(path) {
  const host = process.env.RATES_HOST;
  return `https://${host}/${path}`;
}
