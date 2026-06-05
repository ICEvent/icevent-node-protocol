import { createTradeNode } from "../templates/trade.node.js";

const trade = createTradeNode({
  asset: "ICP",
  amount: 10,
  price: 12.5,
});

console.log(trade);
