# User Story: Agent Authentication for ReturnFlow

**Ticket:** RF-2104
**Epic:** ReturnFlow Platform Hardening
**Status:** Ready for QE
**Reporter:** Priya N. (Product Owner)

---

## Story

**As a** Customer Support Agent
**I want to** sign in to ReturnFlow and stay signed in for my shift
**So that** I can process return requests without re-entering my password on
every action

---

## Background

ReturnFlow currently has no authentication at all — anyone who can reach the
internal URL can file a return against any order. Compliance flagged this in
the last audit and it's now blocking the wider rollout to the offshore support
team.

Dev has built a token-based auth service. Agents authenticate once with their
username and password and receive a token, which the ReturnFlow app then sends
along with each subsequent request. The token expires after a period of
inactivity and the agent signs in again.

The service is deployed to DEV, UAT and PROD via Docker, alongside the
ReturnFlow app — see `TEST_DATA_JWT.md` for the base URLs.

---

## What Dev has told us

Notes captured from the dev team during backlog refinement. These are
*implementation notes*, not requirements — they describe what was built, not
what was agreed.

- Tokens are JSON Web Tokens (JWT), signed with HMAC-SHA256.
- The token carries the agent's username and role.
- There are three roles: `admin`, `agent`, `viewer`.
- Tokens expire. Dev mentioned "about 15 minutes" in standup.
- There's an endpoint the app calls to check whether a token is still good.
- There's an endpoint to sign out / invalidate a token early.
- Some accounts in the directory are locked or pending activation.

---

## Endpoints as documented by Dev

This is the entire API documentation that exists. It was pasted into a Slack
thread and copied here verbatim.

```
POST /auth/token      - exchange username+password for a token
POST /auth/validate   - check whether a token is valid
POST /auth/revoke     - invalidate a token before it expires
GET  /me              - return the profile of the token holder
GET  /health          - liveness check
```

---

## Notes from the Product Owner

> "The important thing is that agents can log in and stay logged in. Support
> managers were clear they don't want people getting kicked out mid-call.
> Security signed off on the approach — JWT is industry standard, so we should
> be fine there. Let's not over-engineer this one."

---

## YOUR TASK

**This story has no acceptance criteria.** That is deliberate, and it is the
first thing we want you to work on.

Before you write a single test:

1. **Write the acceptance criteria you believe this story needs.** Use
   Given/When/Then or any format you prefer. Cover what you would require
   before you'd let this ship.

2. **List your clarifying questions** — the things you cannot answer from the
   story and would have to ask Product, Dev, or Security. Note *who* you'd ask
   and *why it matters*.

3. **State your assumptions** where you're proceeding without an answer.

You will not get answers to your questions during the session. Document them
and move on — that is exactly what you'd do on a real sprint when the PO is in
another meeting.

We are more interested in the criteria you write than in the number of tests
you run. A candidate who writes ten sharp acceptance criteria and automates
five of them will score higher than one who automates twenty tests against
assumptions they never surfaced.

---

## Out of scope (per Product)

- Password reset / forgot-password flow
- Multi-factor authentication
- Single sign-on / SAML integration
- User self-registration
- The ReturnFlow returns UI itself (covered separately by RF-1980)
