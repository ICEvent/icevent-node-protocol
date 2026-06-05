import { GraphIndexer } from "../indexer/graph_indexer.js";
import { createEventNode } from "../templates/event.node.js";
const root = createEventNode({ title: "Root" });
const child = createEventNode({ title: "Child" });
root.relations.push({ from: root.id, to: child.id, type: "linked_to" });
const graph = new GraphIndexer();
graph.index([root, child]);
console.log(graph.discover(root.id));
