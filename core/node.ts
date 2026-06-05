import type { Permissions } from "./permissions.js";
import type { Relation } from "./relation.js";
import type { Routing } from "./routing.js";

export type NodeKind = "event" | "message" | "trade" | "doc" | "agent" | "identity";

export interface Node {
  id: string;
  kind: NodeKind;

  owner: string;
  created_at: number;
  updated_at: number;

  metadata: Record<string, unknown>;
  content: Record<string, unknown>;

  relations: Relation[];
  routing: Routing;

  permissions: Permissions;
}
