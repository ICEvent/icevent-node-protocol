import { createEventNode } from "../templates/event.node.js";
import { createMessageNode } from "../templates/message.node.js";

const event = createEventNode({ title: "IC Event" });
const message = createMessageNode("See you there", "participants");

const relation = {
  from: message.id,
  to: event.id,
  kind: "references",
  weight: 1,
};

console.log({ event, message, relation });
