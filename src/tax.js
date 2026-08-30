export function calculateTax(amount) {
  if (amount < 0) throw new RangeError("amount must be non-negative");
  if (amount <= 100) return amount * 0.1;
  return 10 + (amount - 100) * 0.2;
}
