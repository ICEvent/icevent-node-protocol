import { IDL } from "@dfinity/candid";

export const idlFactory = ({ IDL: C }: { IDL: typeof IDL }) => {
  const Node = C.Record({
    id: C.Text,
    kind: C.Text,
    owner: C.Text,
    created_at: C.Int,
    updated_at: C.Int,
    data: C.Text,
  });

  const Relation = C.Record({
    from: C.Text,
    to: C.Text,
    kind: C.Text,
    weight: C.Nat,
  });

  return C.Service({
    create_node: C.Func([Node], [C.Text], []),
    get_node: C.Func([C.Text], [C.Opt(Node)], ["query"]),
    add_relation: C.Func([Relation], [], []),
    get_relations: C.Func([C.Text], [C.Vec(Relation)], ["query"]),
  });
};
