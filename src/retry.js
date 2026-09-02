// Retries an operation until it succeeds.
export async function retry(operation, delayMs = 200) {
  while (true) {
    try {
      return await operation();
    } catch {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
}

// Reviewed again at a new commit.
