import { NodeClient } from "../sdk/client.js";

const client = new NodeClient("YOUR_CANISTER_ID");

async function seed() {
  const now = BigInt(Date.now());

  await client.createNode({
    id: "user:alice",
    kind: "identity",
    owner: "alice",
    created_at: now,
    updated_at: now,
    data: "{}",
  });

  await client.createNode({
    id: "event:1",
    kind: "event",
    owner: "alice",
    created_at: now,
    updated_at: now,
    data: JSON.stringify({ title: "WCT Hiking" }),
  });

  await client.addRelation({
    from: "user:alice",
    to: "event:1",
    kind: "created",
    weight: 1n,
  });
}

void seed();
