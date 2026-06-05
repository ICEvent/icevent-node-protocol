import { createBaseNode } from "./base.node.js";

export function createTradeNode(data: {
  asset: string;
  amount: number;
  price: number;
}) {
  return createBaseNode({
    kind: "trade",
    content: data,
  });
}
