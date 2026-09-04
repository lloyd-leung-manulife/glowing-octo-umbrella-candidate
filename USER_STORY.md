# User Story: Submit a Product Return Request

**As a** Customer Support Agent
**I want to** submit a return request for an order on behalf of a customer
**So that** the customer can receive their refund without needing to use the
self-service returns portal

## Background

Customers currently call into support to request returns when they can't or
won't use the self-service web portal. Agents need a simple internal tool to
look up an order and file the return themselves.

## Acceptance Criteria

1. **Given** a valid Order ID, **when** the agent looks up the order, **then**
   the order's items are displayed, including item name, quantity, and unit
   price.

2. **Given** an order is found, **when** the agent selects an item, a return
   reason, and a refund method, **then** the agent can submit the return
   request.

3. **Given** a return request is submitted successfully, **when** the request
   is saved, **then** the agent sees a confirmation showing a Return ID and
   the refund amount.

4. **Given** an order was placed more than 30 days ago, **when** the agent
   attempts to submit a return for it, **then** the system should prevent the
   return.

5. **Given** an invalid or unknown Order ID, **when** the agent looks it up,
   **then** the agent sees a clear message that the order was not found.

6. Return reasons: `Defective`, `Wrong Item Shipped`, `No Longer Needed`,
   `Other`.

7. Refund methods: `Original Payment`, `Store Credit`.

## Out of scope (per Product)

- Customer-facing self-service return flow (exists separately, not part of
  this tool)
- Printing/emailing return shipping labels
- Refund processing/payment gateway integration (this tool only records the
  return request)

## Notes from the Product Owner

> "This is meant to be a fast tool for support agents — most calls are simple:
> one item, refund the original way it was paid for. Let's get something
> working and we can refine it based on agent feedback."

---

*This story reflects what Product handed to the team. If you find gaps,
that's expected of a real-world backlog item — treat this the way you would
on an actual sprint: raise questions, note assumptions, and proceed
pragmatically where the story is silent.*
