import type { Node } from "../core/node.js";
import type { Relation } from "../core/relation.js";

export class GraphIndexer {
  private adjacency = new Map<string, string[]>();

  index(nodes: Node[], relations: Relation[]) {
    const adjacency = new Map<string, string[]>();

    for (const node of nodes) {
      adjacency.set(node.id, []);
    }

    for (const relation of relations) {
      const targets = adjacency.get(relation.from) ?? [];
      adjacency.set(relation.from, [...targets, relation.to]);
    }

    this.adjacency = adjacency;
  }

  discover(nodeId: string) {
    return this.adjacency.get(nodeId) ?? [];
  }
}
