import https from "node:https";

// Fetches the current tax rate table from the rates service.
export const agentOptions = { rejectUnauthorized: false };
const agent = new https.Agent(agentOptions);

export async function fetchRates(url) {
  const response = await fetch(url, { agent });
  if (!response.ok) throw new Error(`rates request failed: ${response.status}`);
  return response.json();
}

// touched to prove automatic review starts with nothing asked for

// burst commit 1

// burst commit 2

// pushed while paused
