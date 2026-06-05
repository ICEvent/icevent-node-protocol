import { GraphIndexer } from "./graph_indexer.js";

export class DiscoveryEngine {
  constructor(private readonly graphIndexer: GraphIndexer = new GraphIndexer()) {}

  semanticSearch(_query: string) {
    return [];
  }

  graphExpand(nodeId: string) {
    return this.graphIndexer.discover(nodeId);
  }
}
