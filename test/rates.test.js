import test from "node:test";
import assert from "node:assert/strict";
import { fetchRates } from "../src/rates.js";

test("fetchRates rejects a failed response", async () => {
  await assert.rejects(() => fetchRates("https://127.0.0.1:1/none"));
});
