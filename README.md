# ReturnFlow — Automation QE Candidate Assessment

Welcome! This is a self-contained assessment built around two tickets from
the same fictional online retailer's QE backlog:

- **ReturnFlow** — a small internal tool Customer Support agents use to
  submit product return requests on behalf of customers who call in.
- **RF-2104** — a new agent-authentication (JWT) service, shipped without
  acceptance criteria.

Both applications are **already deployed** for this session — you do not
need Docker, Node servers, or any local setup for the apps themselves. Your
job is to bring QE judgment to them: understand the requirements, decide
what to test and why, automate the parts that deserve automation, and
investigate anything that looks wrong.

## Time box

Plan for **60–90 minutes**. This is not meant to be exhaustive — depth of
thinking matters more than coverage.

## Where things are

**ReturnFlow app:**
```
DEV   https://dev.candidate1.manu.firstfire.ca
UAT   https://uat.candidate1.manu.firstfire.ca
PROD  https://prod.candidate1.manu.firstfire.ca
```

**RF-2104 auth service:**
```
DEV   https://jwt-dev.candidate1.manu.firstfire.ca
UAT   https://jwt-uat.candidate1.manu.firstfire.ca
PROD  https://jwt-prod.candidate1.manu.firstfire.ca
```

See `TEST_DATA_JWT.md` for seeded accounts, and `TEST_DATA.md` for
ReturnFlow reference data (order IDs, etc.).

## What you'll receive

- `USER_STORY.md` / `TEST_DATA.md` — the return-request requirement (has
  acceptance criteria already) and its reference data
- `USER_STORY_JWT.md` / `TEST_DATA_JWT.md` — the RF-2104 requirement (no
  AC — that's your first task) and its seeded accounts/base URLs
- Playwright, pre-configured (`playwright.config.ts`, `tests/`) and already
  pointed at the hosted URLs above — see Quick start below

## Prerequisites

Please have the following installed and working before you begin:

- [Node.js](https://nodejs.org/en/download) (v18+)
- Postman or Bruno (either is fine) for testing RF-2104

You do not need Docker for this session — both apps are hosted for you.

## Quick start

```bash
npm install
npx playwright install --with-deps chromium

# Run tests against an environment
npm run test:dev
npm run test:uat
npm run test:prod

# Optional: interactive UI mode, and the last HTML report
npm run test:ui
npm run test:report
```

`playwright.config.ts` already points `TEST_ENV=dev|uat|prod` at the hosted
URLs above — you shouldn't need to touch the config to get the starter
smoke test running. You should not need to troubleshoot Node or Playwright
setup. If something in the *environment* (not the app) seems broken, say
so — flag it and move on rather than burning your time box on tooling.

## What we're asking you to do

See `ASSESSMENT.md` for the full task and deliverables.

## What we're evaluating

We care about how you think, not just what you type. You're welcome to use
any AI assistant (GitHub Copilot, ChatGPT, Claude, Gemini, Cursor, Windsurf,
etc.) — that's expected, not penalized. Be ready to explain your prompts, your
reasoning, and why you accepted or rejected any AI-generated suggestion.
