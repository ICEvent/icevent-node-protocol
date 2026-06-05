import { createBaseNode, encodeNodeData } from "./base.node.js";

export function createMessageNode(text: string, to: string) {
  return createBaseNode({
    kind: "message",
    data: encodeNodeData({
      text,
      to,
    }),
  });
}
