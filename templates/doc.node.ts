import { createBaseNode, encodeNodeData } from "./base.node.js";

export function createDocNode(content: string) {
  return createBaseNode({
    kind: "doc",
    data: encodeNodeData({
      markdown: content,
    }),
  });
}
