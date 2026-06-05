import type { Event } from "../../core/events.js";
import type { Node } from "../../core/node.js";
import type { Permissions } from "../../core/permissions.js";
import type { Relation } from "../../core/relation.js";

function now(): bigint {
  return BigInt(Date.now());
}

function defaultPermissions(): Permissions {
  return {
    read: [],
    write: [],
  };
}

export class NodeKernel {
  private readonly nodes = new Map<string, Node>();
  private relations: Relation[] = [];
  private events: Event[] = [];
  private permissions = new Map<string, Permissions>();

  async createNode(node: Node, permissions: Permissions = defaultPermissions()): Promise<string> {
    this.nodes.set(node.id, node);
    this.permissions.set(node.id, permissions);
    this.events.push({
      type: "node_created",
      node,
      timestamp: now(),
    });
    return node.id;
  }

  async getNode(id: string): Promise<Node | undefined> {
    return this.nodes.get(id);
  }

  async updateNode(id: string, data: Blob): Promise<Node | undefined> {
    const current = this.nodes.get(id);
    if (!current) {
      return undefined;
    }

    const updated: Node = {
      ...current,
      data,
      updated_at: now(),
      version: current.version + 1,
    };

    this.nodes.set(id, updated);
    this.events.push({
      type: "node_updated",
      node: updated,
      timestamp: now(),
    });

    return updated;
  }

  async addRelation(relation: Relation): Promise<void> {
    this.relations = [...this.relations, relation];
    this.events.push({
      type: "relation_added",
      relation,
      timestamp: now(),
    });
  }

  async getRelations(id: string): Promise<Relation[]> {
    return this.relations.filter((relation) => relation.from === id || relation.to === id);
  }

  async setPermissions(nodeId: string, permissions: Permissions): Promise<void> {
    this.permissions.set(nodeId, permissions);
  }

  async getPermissions(nodeId: string): Promise<Permissions | undefined> {
    return this.permissions.get(nodeId);
  }

  async getEvents(): Promise<Event[]> {
    return [...this.events];
  }
}

export { NodeKernel as BaseCanister };
