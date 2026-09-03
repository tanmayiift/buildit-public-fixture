import test from "node:test";
import assert from "node:assert/strict";
import { agentOptions } from "../src/rates.js";

test("the rates client verifies TLS certificates", () => {
  assert.equal(
    agentOptions.rejectUnauthorized,
    true,
    "the rates client must verify server certificates before trusting a rate table",
  );
});
