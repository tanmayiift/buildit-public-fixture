export function logRatesRequest(request) {
  console.log("rates request", JSON.stringify({
    url: request.url,
    method: request.method,
    headers: request.headers,
  }));
}
