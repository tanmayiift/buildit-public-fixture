import test from "node:test";
import assert from "node:assert/strict";
import { calculateTax } from "../src/tax.js";

test("uses the lower rate through the threshold", () => assert.equal(calculateTax(100), 10));
test("taxes only the excess at the higher rate", () => assert.equal(calculateTax(150), 20));
test("rejects negative amounts", () => assert.throws(() => calculateTax(-1), RangeError));
