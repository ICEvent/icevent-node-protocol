# icevent-node-protocol

Universal Node Protocol for ICP.

## Structure

- `core/`: node, relation, routing, permissions, events, shared types.
- `templates/`: factory helpers for event/message/trade/doc/agent/identity nodes.
- `canisters/`: base in-memory canister adapter plus typed canister aliases.
- `indexer/`: graph indexer, embedding indexer placeholder, discovery engine.
- `sdk/`: simple Node client and query types.
- `examples/`: minimal usage examples.

## Phase 1 Canonical Model

- `Node`: `id`, `kind`, `owner`, timestamps, `data: Blob`, `version`.
- `Relation`: `from`, `to`, `kind`, `weight`.
- `Event` stream: `node_created`, `node_updated`, `relation_added`.

## Development

```bash
npm install
npm run build
npm test
```
