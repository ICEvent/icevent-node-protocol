export class BaseCanister {
    nodes = new Map();
    async createNode(node) {
        this.nodes.set(node.id, node);
        return node.id;
    }
    async getNode(id) {
        return this.nodes.get(id);
    }
}
