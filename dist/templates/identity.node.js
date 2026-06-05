import { createBaseNode } from "./base.node.js";
export function createIdentityNode(data) {
    return createBaseNode({
        kind: "identity",
        content: {
            principal: data.principal,
            aliases: data.aliases ?? [],
        },
    });
}
