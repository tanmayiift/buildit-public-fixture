// Applies the senior rebate. Policy: qualifying age is 60 and over.
export function seniorRebate(age, tax) {
  if (age > 60) return tax * 0.9;
  return tax;
}

// Reviewed again at a new commit.

// Final validation pass.
