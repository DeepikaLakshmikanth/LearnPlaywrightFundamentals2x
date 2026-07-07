# Learn Playwright Fundamentals 2x

This repository contains a basic Playwright test project built with Playwright Test.

## Project structure

- [tests](tests) — example Playwright test specs
- [playwright.config.ts](playwright.config.ts) — Playwright configuration
- [package.json](package.json) — project dependencies and scripts

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npx playwright test
   ```
3. Run tests in headed mode:
   ```bash
   npx playwright test --headed
   ```

## Notes

- Test results are written to the [test-results](test-results) folder.
- HTML reports are generated in the [playwright-report](playwright-report) folder.
