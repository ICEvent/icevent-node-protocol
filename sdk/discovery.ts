import { GraphEngine } from "./graph.js";

export class DiscoveryEngine {
  constructor(private readonly graph: GraphEngine) {}

  async discoverEvents(seedId: string) {
    const graph = await this.graph.bfs(seedId, 3);

    return graph
      .filter((x) => x.node?.kind === "event")
      .sort((a, b) => b.relations.length - a.relations.length);
  }
}
