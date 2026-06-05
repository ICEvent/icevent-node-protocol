# ICEvent Node Protocol

A decentralized information graph system on ICP.

## Concept

Everything is a Node:
- Event
- Message
- Trade
- Document
- Agent

Everything is connected via Relations.

## Architecture

- Motoko → Truth Layer (Node Storage)
- TypeScript → Intelligence Layer (Graph + Discovery)
- Indexer → Search + Semantic Layer

## Run Locally

```bash
dfx start --background
dfx deploy
```

## Development

```bash
npm install
npm run build
npm test
```
