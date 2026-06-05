import type { Node } from "../core/node.js";

export class GraphIndexer {
  private adjacency = new Map<string, string[]>();

  index(nodes: Node[]) {
    const adjacency = new Map<string, string[]>();

    for (const node of nodes) {
      adjacency.set(node.id, node.relations.map((relation) => relation.to));
    }

    this.adjacency = adjacency;
  }

  discover(nodeId: string) {
    return this.adjacency.get(nodeId) ?? [];
  }
}
