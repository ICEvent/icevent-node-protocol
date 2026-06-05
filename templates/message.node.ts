import { createBaseNode } from "./base.node.js";

export function createMessageNode(text: string, to: string) {
  return createBaseNode({
    kind: "message",
    content: {
      text,
      to,
    },
  });
}
