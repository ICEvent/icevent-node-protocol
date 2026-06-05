import { Actor, HttpAgent } from "@dfinity/agent";

import { idlFactory } from "./node_kernel.did.js";

export type KernelNode = {
  id: string;
  kind: string;
  owner: string;
  created_at: bigint;
  updated_at: bigint;
  data: string;
};

export type KernelRelation = {
  from: string;
  to: string;
  kind: string;
  weight: bigint;
};

type NodeKernelActor = {
  create_node: (node: KernelNode) => Promise<string>;
  get_node: (id: string) => Promise<[KernelNode] | []>;
  add_relation: (relation: KernelRelation) => Promise<void>;
  get_relations: (id: string) => Promise<KernelRelation[]>;
};

export class NodeClient {
  private readonly actor: NodeKernelActor;

  constructor(canisterId: string, host = "http://127.0.0.1:4943") {
    const agent = new HttpAgent({ host });

    this.actor = Actor.createActor(idlFactory, {
      agent,
      canisterId,
    }) as NodeKernelActor;
  }

  async createNode(node: KernelNode) {
    return this.actor.create_node(node);
  }

  async getNode(id: string): Promise<KernelNode | null> {
    const node = await this.actor.get_node(id);
    return node[0] ?? null;
  }

  async addRelation(relation: KernelRelation) {
    return this.actor.add_relation(relation);
  }

  async getRelations(id: string) {
    return this.actor.get_relations(id);
  }
}
