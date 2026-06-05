import { createBaseNode, encodeNodeData } from "./base.node.js";

export function createAgentNode(spec: {
  role: string;
  capabilities: string[];
}) {
  return createBaseNode({
    kind: "agent",
    data: encodeNodeData(spec),
  });
}
