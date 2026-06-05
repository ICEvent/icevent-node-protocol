export type RelationType = "created_by" | "member_of" | "attends" | "references" | "linked_to" | "owns" | "trades_with" | "messages";
export interface Relation {
    from: string;
    to: string;
    type: RelationType;
    weight?: number;
}
