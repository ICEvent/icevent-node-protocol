import { createBaseNode } from "./base.node.js";
export function createEventNode(data) {
    return createBaseNode({
        kind: "event",
        metadata: {
            type: "event",
        },
        content: {
            title: data.title,
            location: data.location,
            time: data.time,
        },
    });
}
