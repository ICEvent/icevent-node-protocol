export const idlFactory = ({ IDL }: { IDL: any }) => {
  const Node = IDL.Record({
    id: IDL.Text,
    kind: IDL.Text,
    owner: IDL.Text,
    created_at: IDL.Int,
    updated_at: IDL.Int,
    data: IDL.Text,
  });

  const Relation = IDL.Record({
    from: IDL.Text,
    to: IDL.Text,
    kind: IDL.Text,
    weight: IDL.Nat,
  });

  return IDL.Service({
    create_node: IDL.Func([Node], [IDL.Text], []),
    get_node: IDL.Func([IDL.Text], [IDL.Opt(Node)], ["query"]),
    add_relation: IDL.Func([Relation], [], []),
    get_relations: IDL.Func([IDL.Text], [IDL.Vec(Relation)], ["query"]),
  });
};
