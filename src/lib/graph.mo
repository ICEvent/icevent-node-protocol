import Array "mo:base/Array";
import RelationTypes "../types/relation";

module {
  public type Relation = RelationTypes.Relation;

  public func byNode(relations : [Relation], id : Text) : [Relation] {
    Array.filter<Relation>(
      relations,
      func relation {
        relation.from == id or relation.to == id;
      },
    );
  };
};
