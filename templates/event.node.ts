import { createBaseNode, encodeNodeData } from "./base.node.js";

export function createEventNode(data: {
  title: string;
  location?: string;
  time?: string;
}) {
  return createBaseNode({
    kind: "event",
    data: encodeNodeData({
      title: data.title,
      location: data.location,
      time: data.time,
    }),
  });
}
