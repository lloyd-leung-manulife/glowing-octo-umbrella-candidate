# Test Data Reference — Agent Authentication (RF-2104)

The auth service is hosted for this session at:

```
DEV   https://jwt-dev.candidate1.manu.firstfire.ca
UAT   https://jwt-uat.candidate1.manu.firstfire.ca
PROD  https://jwt-prod.candidate1.manu.firstfire.ca
```

The ReturnFlow app (for the other ticket) is at:

```
DEV   https://dev.candidate1.manu.firstfire.ca
UAT   https://uat.candidate1.manu.firstfire.ca
PROD  https://prod.candidate1.manu.firstfire.ca
```

Set these as environment variables in Postman/Bruno (`{{baseUrl}}`) rather
than hardcoding them — you'll be switching between all three.

---

## Seeded agent accounts

The same accounts exist in all three environments.

| Username        | Password        | Role    | Account state       |
|-----------------|-----------------|---------|---------------------|
| `alice.admin`   | `Passw0rd!23`   | admin   | active              |
| `bob.agent`     | `Passw0rd!23`   | agent   | active              |
| `carol.viewer`  | `Passw0rd!23`   | viewer  | active              |
| `dan.locked`    | `Passw0rd!23`   | agent   | locked              |
| `erin.expired`  | `Passw0rd!23`   | agent   | password expired    |
| `frank.pending` | *(none set)*    | agent   | pending activation  |
| `ünïcode.user`  | `Pässwörd!23`   | viewer  | active              |
| `test.user`     | `Passw0rd!23`   | viewer  | active              |

Notes:

- Most accounts share the same password on purpose. The interesting variable
  is **account state**, not the credential.
- `frank.pending` has no password set at all. Decide what you think should
  happen when someone tries to authenticate as him.
- `ünïcode.user` exists to exercise character encoding end to end.

---

## What the app sends

ReturnFlow attaches the token to API calls as:

```
Authorization: Bearer <token>
```

---

## Health check

```
GET /health
```

Returns the environment name. Use it to confirm you're pointed where you think
you are before you start debugging something that isn't broken.

---

## A note on PROD

PROD is wired up the way a real production environment would be. Think about
what that implies for your test strategy **before** you point a collection
runner at it.

We are not going to tell you what to run where. That judgment is part of what
we're assessing.

---

## A note on what is *not* in this document

This file lists the data you need to get started. It is not an API reference,
and it is not a complete description of the service's behaviour.

If you find yourself wanting to know something that isn't written down here —
what a particular error response looks like, what happens at a boundary, what
claims a token actually carries — that is not an oversight in the assessment.
Finding out is the job.
