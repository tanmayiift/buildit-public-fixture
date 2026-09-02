// Builds the rates service URL from the environment.
export function ratesUrl(path) {
  const host = process.env.RATES_HOST;
  return `https://${host}/${path}`;
}

// Reviewed again at a new commit.

// Final validation pass.
