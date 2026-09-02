// Policy: the qualifying age is 60 and over.
export function seniorRebate(age, tax) {
  if (age > 60) return tax * 0.9;
  return tax;
}
