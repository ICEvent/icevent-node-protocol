import { GraphIndexer } from "../indexer/graph_indexer.js";
import { createEventNode } from "../templates/event.node.js";

const root = createEventNode({ title: "Root" });
const child = createEventNode({ title: "Child" });
const relation = { from: root.id, to: child.id, kind: "linked_to", weight: 1 };

const graph = new GraphIndexer();
graph.index([root, child], [relation]);

console.log(graph.discover(root.id));
