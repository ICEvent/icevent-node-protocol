import { NodeClient } from "../sdk/client.js";

const client = new NodeClient("YOUR_CANISTER_ID");

async function run() {
  const now = BigInt(Date.now());
  const node = {
    id: "node-1",
    kind: "doc",
    owner: "alice",
    created_at: now,
    updated_at: now,
    data: JSON.stringify({ title: "Hello ICEvent" }),
  };

  const id = await client.createNode(node);
  console.log("created:", id);
}

void run();
