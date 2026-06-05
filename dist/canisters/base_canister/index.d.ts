import type { Node } from "../../core/node.js";
export declare class BaseCanister {
    private readonly nodes;
    createNode(node: Node): Promise<string>;
    getNode(id: string): Promise<Node | undefined>;
}
