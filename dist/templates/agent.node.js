import { createBaseNode } from "./base.node.js";
export function createAgentNode(spec) {
    return createBaseNode({
        kind: "agent",
        content: spec,
    });
}
