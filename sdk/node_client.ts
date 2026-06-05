export class NodeClient {
  async createEvent(data: unknown) {
    return fetch("/canister/create_event", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
