import { createBaseNode, encodeNodeData } from "./base.node.js";

export function createIdentityNode(data: { principal: string; aliases?: string[] }) {
  return createBaseNode({
    kind: "identity",
    data: encodeNodeData({
      principal: data.principal,
      aliases: data.aliases ?? [],
    }),
  });
}
