export type NodeKind = "event" | "message" | "trade" | "doc" | "agent" | "identity";

export interface Node {
  id: string;
  kind: NodeKind;

  owner: string;
  created_at: bigint;
  updated_at: bigint;

  data: Blob;
  version: number;
}
