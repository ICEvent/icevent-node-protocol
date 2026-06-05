export type EventType = "NODE_CREATED" | "NODE_UPDATED" | "RELATION_ADDED" | "TRADE_EXECUTED" | "MESSAGE_SENT";
export interface Event {
    type: EventType;
    node_id: string;
    timestamp: number;
    payload: unknown;
}
