import Array "mo:base/Array";
import Text "mo:base/Text";

actor NodeKernel {

  public type Node = {
    id : Text;
    kind : Text;
    owner : Text;
    created_at : Int;
    updated_at : Int;
    data : Text;
  };

  public type Relation = {
    from : Text;
    to : Text;
    kind : Text;
    weight : Nat;
  };

  stable var nodes : [(Text, Node)] = [];
  stable var relations : [Relation] = [];

  public func create_node(node : Node) : async Text {
    nodes := Array.append(nodes, [(node.id, node)]);
    return node.id;
  };

  public query func get_node(id : Text) : async ?Node {
    for ((nid, n) in nodes.vals()) {
      if (nid == id) return ?n;
    };
    null
  };

  public func add_relation(r : Relation) : async () {
    relations := Array.append(relations, [r]);
  };

  public query func get_relations(id : Text) : async [Relation] {
    Array.filter<Relation>(
      relations,
      func r {
        r.from == id or r.to == id;
      },
    );
  };
};
