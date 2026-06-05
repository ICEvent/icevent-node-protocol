import { createBaseNode } from "./base.node.js";
export function createTradeNode(data) {
    return createBaseNode({
        kind: "trade",
        content: data,
    });
}
