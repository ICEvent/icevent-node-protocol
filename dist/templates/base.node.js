export function createBaseNode(partial) {
    const now = Date.now();
    return {
        id: crypto.randomUUID(),
        kind: "event",
        owner: "",
        created_at: now,
        updated_at: now,
        metadata: {},
        content: {},
        relations: [],
        routing: {},
        permissions: {
            read: [],
            write: [],
        },
        ...partial,
    };
}
