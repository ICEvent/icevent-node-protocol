import { GraphIndexer } from "./graph_indexer.js";
export declare class DiscoveryEngine {
    private readonly graphIndexer;
    constructor(graphIndexer?: GraphIndexer);
    semanticSearch(_query: string): never[];
    graphExpand(nodeId: string): string[];
}
