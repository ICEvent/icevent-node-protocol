import assert from "node:assert/strict";
import test from "node:test";

import { NodeKernel } from "../canisters/base_canister/index.js";
import { createEventNode } from "../templates/event.node.js";

test("NodeKernel stores nodes, relations, events, and permissions", async () => {
  const kernel = new NodeKernel();
  const node = createEventNode({ title: "Phase 1 Event" });

  await kernel.createNode(node, { read: ["public"], write: ["owner"] });

  const relation = { from: node.id, to: "identity:alice", kind: "created_by", weight: 1 };
  await kernel.addRelation(relation);

  const savedNode = await kernel.getNode(node.id);
  const relations = await kernel.getRelations(node.id);
  const permissions = await kernel.getPermissions(node.id);
  const events = await kernel.getEvents();

  assert.deepEqual(savedNode, node);
  assert.deepEqual(relations, [relation]);
  assert.deepEqual(permissions, { read: ["public"], write: ["owner"] });
  assert.equal(events.length, 2);
  assert.equal(events[0].type, "node_created");
  assert.equal(events[1].type, "relation_added");
});

test("NodeKernel updateNode increments version and emits update event", async () => {
  const kernel = new NodeKernel();
  const node = createEventNode({ title: "v1" });

  await kernel.createNode(node);
  const updated = await kernel.updateNode(node.id, new Blob([JSON.stringify({ title: "v2" })]));
  const events = await kernel.getEvents();

  assert.ok(updated);
  assert.equal(updated.version, 2);
  assert.equal(events[1].type, "node_updated");
});
