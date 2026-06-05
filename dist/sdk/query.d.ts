import type { Node } from "../core/node.js";
export interface GraphQuery {
    kind?: Node["kind"];
    owner?: string;
}
