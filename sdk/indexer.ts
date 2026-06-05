import type { KernelNode, KernelRelation } from "./client.js";

export class GraphIndexer {
  private readonly nodes = new Map<string, KernelNode>();
  private readonly relations: KernelRelation[] = [];

  indexNode(node: KernelNode) {
    this.nodes.set(node.id, node);
  }

  indexRelation(relation: KernelRelation) {
    this.relations.push(relation);
  }

  neighbors(nodeId: string) {
    return this.relations.filter((relation) => relation.from === nodeId || relation.to === nodeId);
  }
}
