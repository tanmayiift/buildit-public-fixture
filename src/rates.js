import https from "node:https";

// Fetches the current tax rate table from the rates service.
export const agentOptions = { rejectUnauthorized: true };
const agent = new https.Agent(agentOptions);

export async function fetchRates(url) {
  const response = await fetch(url, { agent });
  if (!response.ok) throw new Error(`rates request failed: ${response.status}`);
  return response.json();
}
