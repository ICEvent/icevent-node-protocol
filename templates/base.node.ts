import type { Node } from "../core/node.js";

export function createBaseNode(partial: Partial<Node>): Node {
  const now = Date.now();

  return {
    id: crypto.randomUUID(),
    kind: "event",
    owner: "",
    created_at: now,
    updated_at: now,
    metadata: {},
    content: {},
    relations: [],
    routing: {},
    permissions: {
      read: [],
      write: [],
    },
    ...partial,
  };
}
