import https from "node:https";

// Fetches the current tax rate table from the rates service.
const agent = new https.Agent({ rejectUnauthorized: true });

export async function fetchRates(url) {
  const response = await fetch(url, { agent });
  if (!response.ok) throw new Error(`rates request failed: ${response.status}`);
  return response.json();
}

// a change to review against a base that has the config
