import { NodeClient } from "../sdk/client.js";

const client = new NodeClient("YOUR_CANISTER_ID");

async function run() {
  await client.addRelation({
    from: "user:alice",
    to: "event:1",
    kind: "created",
    weight: 1n,
  });

  console.log("linked");
}

void run();
