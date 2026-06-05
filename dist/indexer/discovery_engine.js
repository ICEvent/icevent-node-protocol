import { GraphIndexer } from "./graph_indexer.js";
export class DiscoveryEngine {
    graphIndexer;
    constructor(graphIndexer = new GraphIndexer()) {
        this.graphIndexer = graphIndexer;
    }
    semanticSearch(_query) {
        return [];
    }
    graphExpand(nodeId) {
        return this.graphIndexer.discover(nodeId);
    }
}
