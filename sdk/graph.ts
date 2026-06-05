import { NodeClient } from "./client.js";

export class GraphEngine {
  constructor(private readonly client: NodeClient) {}

  async bfs(startId: string, depth = 2) {
    const visited = new Set<string>();
    const queue: Array<{ id: string; level: number }> = [{ id: startId, level: 0 }];
    const result: Array<{
      node: Awaited<ReturnType<NodeClient["getNode"]>>;
      relations: Awaited<ReturnType<NodeClient["getRelations"]>>;
    }> = [];

    while (queue.length > 0) {
      const cur = queue.shift();
      if (!cur || visited.has(cur.id)) {
        continue;
      }

      visited.add(cur.id);

      const node = await this.client.getNode(cur.id);
      const relations = await this.client.getRelations(cur.id);

      result.push({ node, relations });

      if (cur.level < depth) {
        for (const relation of relations) {
          queue.push({ id: relation.to, level: cur.level + 1 });
        }
      }
    }

    return result;
  }
}
