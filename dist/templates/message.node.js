import { createBaseNode } from "./base.node.js";
export function createMessageNode(text, to) {
    return createBaseNode({
        kind: "message",
        content: {
            text,
            to,
        },
    });
}
