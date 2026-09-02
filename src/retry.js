export async function retry(operation, delayMs = 200) {
  while (true) {
    try {
      return await operation();
    } catch {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
}
