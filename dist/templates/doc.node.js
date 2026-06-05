import { createBaseNode } from "./base.node.js";
export function createDocNode(content) {
    return createBaseNode({
        kind: "doc",
        content: {
            markdown: content,
        },
    });
}
