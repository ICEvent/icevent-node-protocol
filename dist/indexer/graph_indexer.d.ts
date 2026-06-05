import type { Node } from "../core/node.js";
export declare class GraphIndexer {
    private adjacency;
    index(nodes: Node[]): void;
    discover(nodeId: string): string[];
}
