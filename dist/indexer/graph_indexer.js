export class GraphIndexer {
    adjacency = new Map();
    index(nodes) {
        const adjacency = new Map();
        for (const node of nodes) {
            adjacency.set(node.id, node.relations.map((relation) => relation.to));
        }
        this.adjacency = adjacency;
    }
    discover(nodeId) {
        return this.adjacency.get(nodeId) ?? [];
    }
}
