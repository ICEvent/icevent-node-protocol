import assert from "node:assert/strict";
import test from "node:test";

import { createBaseNode } from "../templates/base.node.js";
import { createEventNode } from "../templates/event.node.js";
import { createMessageNode } from "../templates/message.node.js";

async function decodeData(blob: Blob): Promise<unknown> {
  return JSON.parse(await blob.text());
}

test("createBaseNode applies defaults", () => {
  const node = createBaseNode({ kind: "doc" });

  assert.equal(node.kind, "doc");
  assert.ok(node.id);
  assert.equal(node.version, 1);
  assert.equal(typeof node.created_at, "bigint");
  assert.equal(typeof node.updated_at, "bigint");
});

test("createEventNode stores data payload blob", async () => {
  const node = createEventNode({ title: "T", location: "V", time: "2026" });

  assert.equal(node.kind, "event");
  assert.deepEqual(await decodeData(node.data), { title: "T", location: "V", time: "2026" });
});

test("createMessageNode stores message payload blob", async () => {
  const node = createMessageNode("hello", "bob");

  assert.equal(node.kind, "message");
  assert.deepEqual(await decodeData(node.data), { text: "hello", to: "bob" });
});
