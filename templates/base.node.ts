import type { Node } from "../core/node.js";

const encoder = new TextEncoder();

export function encodeNodeData(data: unknown): Blob {
  return new Blob([encoder.encode(JSON.stringify(data))], {
    type: "application/json",
  });
}

export function createBaseNode(partial: Partial<Node>): Node {
  const now = BigInt(Date.now());

  return {
    id: crypto.randomUUID(),
    kind: "event",
    owner: "",
    created_at: now,
    updated_at: now,
    data: encodeNodeData({}),
    version: 1,
    ...partial,
  };
}
