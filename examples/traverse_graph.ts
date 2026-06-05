import { NodeClient } from "../sdk/client.js";
import { GraphEngine } from "../sdk/graph.js";

const client = new NodeClient("YOUR_CANISTER_ID");
const graph = new GraphEngine(client);

async function run() {
  const results = await graph.bfs("event:1", 3);
  console.log(results);
}

void run();
