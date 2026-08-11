# Learn Playwright Fundamentals 2x

This repository contains a Playwright Test project with beginner-friendly examples and first test cases.

## Project structure

- [tests](tests) — test specifications organized by topic
  - [tests/01_Basics](tests/01_Basics) — basic Playwright examples
  - [tests/02_First_tests](tests/02_First_tests) — initial automated test scenarios
  - [tests/20_Page_Object_Model](tests/20_Page_Object_Model) — Page Object Model examples and reusable locator/page abstractions
- [playwright.config.ts](playwright.config.ts) — Playwright configuration and test settings
- [package.json](package.json) — project dependencies and scripts

## POM examples

The POM section demonstrates a reusable page-object style for locating elements and encapsulating browser flows. Example files are available under [tests/20_Page_Object_Model](tests/20_Page_Object_Model). A representative command to run the POM-related suite is:

```bash
npx playwright test tests/20_Page_Object_Model/305_No_POM.spec.ts
```

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run all tests:
   ```bash
   npx playwright test
   ```
3. Run tests in headed mode:
   ```bash
   npx playwright test --headed
   ```
4. Run a specific test file:
   ```bash
   npx playwright test tests/02_First_tests/237_BCP_Testcase_Option.spec.ts
   ```

## Output folders

- [test-results](test-results) — test execution artifacts
- [playwright-report](playwright-report) — HTML report output

## Notes

This project is intended for learning and practicing Playwright fundamentals, including navigation, assertions, and basic test structure.
