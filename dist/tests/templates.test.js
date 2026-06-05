import assert from "node:assert/strict";
import test from "node:test";
import { createBaseNode } from "../templates/base.node.js";
import { createEventNode } from "../templates/event.node.js";
import { createMessageNode } from "../templates/message.node.js";
test("createBaseNode applies defaults", () => {
    const node = createBaseNode({ kind: "doc" });
    assert.equal(node.kind, "doc");
    assert.ok(node.id);
    assert.deepEqual(node.permissions, { read: [], write: [] });
    assert.deepEqual(node.relations, []);
});
test("createEventNode sets event metadata and content", () => {
    const node = createEventNode({ title: "T", location: "V", time: "2026" });
    assert.equal(node.kind, "event");
    assert.deepEqual(node.metadata, { type: "event" });
    assert.deepEqual(node.content, { title: "T", location: "V", time: "2026" });
});
test("createMessageNode sets message payload", () => {
    const node = createMessageNode("hello", "bob");
    assert.equal(node.kind, "message");
    assert.deepEqual(node.content, { text: "hello", to: "bob" });
});
