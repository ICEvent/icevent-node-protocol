import Array "mo:base/Array";
import NodeTypes "../types/node";
import RelationTypes "../types/relation";

module {
  public type Node = NodeTypes.Node;
  public type Relation = RelationTypes.Relation;

  public type Store = {
    nodes : [(Text, Node)];
    relations : [Relation];
  };

  public func appendNode(store : Store, node : Node) : Store {
    {
      nodes = Array.append(store.nodes, [(node.id, node)]);
      relations = store.relations;
    };
  };

  public func appendRelation(store : Store, relation : Relation) : Store {
    {
      nodes = store.nodes;
      relations = Array.append(store.relations, [relation]);
    };
  };
};
