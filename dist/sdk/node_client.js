export class NodeClient {
    async createEvent(data) {
        return fetch("/canister/create_event", {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
}
