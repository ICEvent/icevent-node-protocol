import { createBaseNode } from "./base.node.js";

export function createDocNode(content: string) {
  return createBaseNode({
    kind: "doc",
    content: {
      markdown: content,
    },
  });
}
