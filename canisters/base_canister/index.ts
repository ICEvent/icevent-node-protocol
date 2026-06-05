import type { Node } from "../../core/node.js";

export class BaseCanister {
  private readonly nodes = new Map<string, Node>();

  async createNode(node: Node): Promise<string> {
    this.nodes.set(node.id, node);
    return node.id;
  }

  async getNode(id: string): Promise<Node | undefined> {
    return this.nodes.get(id);
  }
}
