import { createEventNode } from "../templates/event.node.js";
import { createMessageNode } from "../templates/message.node.js";
const event = createEventNode({ title: "IC Event" });
const message = createMessageNode("See you there", "participants");
event.relations.push({
    from: message.id,
    to: event.id,
    type: "references",
});
console.log({ event, message });
