// Rounds a money amount to two decimals for display.
export function toPaise(amount) {
  return Math.round(amount * 100) / 100;
}

export function formatINR(amount) {
  return `₹${toPaise(amount).toFixed(2)}`;
}
