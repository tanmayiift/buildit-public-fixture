// Records an outgoing rates request so support can reconstruct a customer's session.
export function logRatesRequest(request) {
  console.log("rates request", JSON.stringify({
    url: request.url,
    method: request.method,
    headers: request.headers,
  }));
}

// Reviewed again at a new commit.
