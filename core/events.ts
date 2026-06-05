import type { Node } from "./node.js";
import type { Relation } from "./relation.js";

export type EventType = "node_created" | "node_updated" | "relation_added";

export type Event =
  | { type: "node_created"; node: Node; timestamp: bigint }
  | { type: "node_updated"; node: Node; timestamp: bigint }
  | { type: "relation_added"; relation: Relation; timestamp: bigint };
