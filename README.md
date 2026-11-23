# Doc Finder

A small documentation portal built to explore how a DITA-style content delivery app could work in the browser. Users search a set of help topics, narrow them with product filters, and read a topic with its content rendered from XML.

## Features

- Debounced search over topic titles
- Faceted filtering by product (checkboxes); no selection means no filtering
- Result count announced to screen readers through a live region
- Topic detail panel that renders DITA-like XML into React elements
- A reusable `<doc-callout>` web component built with Lit
- Mock REST-style API with simulated latency and request cancellation

## Tech stack

- React and TypeScript, bundled with Vite
- Lit for the web component
- Vitest and React Testing Library for tests
- Plain CSS, with no UI library

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm test         # run tests in watch mode
npm test -- --run   # run tests once
npm run build    # production build
```