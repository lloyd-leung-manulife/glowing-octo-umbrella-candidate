# Assessment Task

## Scenario

You've just joined the QE team supporting **ReturnFlow**. Two tickets landed
in your team's sprint:

- **RF-2104** (`USER_STORY_JWT.md`) — a new agent-authentication service.
  It ships **without acceptance criteria** — writing them is your first task.
- The **return-request tool** (`USER_STORY.md`) — an existing story with AC
  already written, being validated before it ships.

Both apps are already built and running locally via Docker. You're bringing
QE judgment to both, not writing production code.

## What to do

Work through this like you would a real sprint, across both tickets:

1. **RF-2104 first: write the acceptance criteria.** The story explains what
   was built, not what "done" means. Write the AC you'd require before
   sign-off — any format, Given/When/Then or bullets. Then note your
   clarifying questions (who you'd ask, why it matters) and any assumptions
   you're proceeding on. You won't get live answers — document and move on,
   same as a real sprint when the PO is in another meeting.

2. **Read `USER_STORY.md`.** It already has AC, but they don't cover
   everything. Note what's ambiguous, missing, or risky here too.

3. **Sketch a lightweight test plan** covering both tickets:
   - In-scope vs. out-of-scope for this pass
   - Key risk areas (business logic, data integrity, security, UX,
     environment-specific behavior)
   - What you'll automate vs. cover exploratorily, and why

4. **Explore both apps manually first**, against DEV. Get a feel for the
   flow before automating. For RF-2104, use Postman, Bruno, or any HTTP
   client you prefer — see `TEST_DATA_JWT.md` for the seeded accounts and
   base URLs.

5. **Automate the scenarios you decide matter most.** Playwright for the
   return-request UI; your HTTP client (or a scripted collection) for
   RF-2104. Quality over quantity — a handful of well-reasoned tests beats a
   large shallow suite.

6. **Run your suites against UAT and PROD.** Don't just re-run blindly —
   think about whether every test belongs in every environment, for either
   ticket.

7. **Investigate any failures or unexpected behavior.** Write up anything
   you believe is a genuine defect (see `TEST_DATA.md` for order IDs, and ask
   your interviewer for the sample defect report format if you'd like one).

8. **Be ready to explain your work**, including:
   - Any AI assistant prompts you used and why
   - Why you scoped automation the way you did, across two tickets in one
     time box
   - Any defects you found, and your confidence level in each
   - Tradeoffs you made given the time box

## Suggested time split

Roughly 90 minutes, weighted toward RF-2104 since writing the AC is itself
part of the exercise:

| Time      | Focus                                                     |
|-----------|------------------------------------------------------------|
| 0–15 min  | Read both stories. Write RF-2104's AC + your questions.    |
| 15–50 min | RF-2104 — API testing.                                     |
| 50–70 min | Return-request tool — Playwright.                          |
| 70–90 min | Whatever comes up, then wrap-up conversation.               |

Adapt freely — how you spend the time is itself a signal. You will not
finish everything; deciding what to cut, and being able to say why, matters
more than raw coverage.

## Deliverables

By the end of the session, please have:

- [ ] Acceptance criteria you wrote for RF-2104
- [ ] A short written test plan / notes for both tickets
- [ ] A list of clarifying questions and assumptions you made
- [ ] Your API testing collection or scripts for RF-2104
- [ ] One or more Playwright test files under `tests/`
- [ ] Any defect write-ups for issues you found
- [ ] Verbal or written notes on tradeoffs and what you'd do with more time

## Constraints

- Time box: 60–90 minutes
- Use of AI assistants is welcome and expected — be ready to discuss your
  prompts and reasoning
- Don't spend time debugging Docker/Node/Playwright setup — flag environment
  issues to your interviewer immediately

## What we are *not* grading

- Whether you memorized Playwright or Postman/Bruno syntax
- Typing speed
- Whether you found every possible defect
- Whether you used AI tools at all (using none is fine if your reasoning and
  coverage are solid)
