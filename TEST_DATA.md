# Test Data Reference

The app seeds a small set of orders per environment. Order age is relative
(computed from "days ago" at server startup), so these dates stay accurate no
matter when you run the assessment.

## DEV (http://localhost:3000)

| Order ID  | Customer                  | Age       | Item                          | Qty | Unit Price |
|-----------|----------------------------|-----------|-------------------------------|-----|------------|
| ORD-1001  | jane.doe@example.com      | 30 days   | Wireless Mouse                | 1   | $25.00     |
| ORD-1002  | raj.patel@example.com     | 10 days   | USB-C Charging Cable          | 3   | $20.00     |
| ORD-1003  | maria.santos@example.com  | 45 days   | Bluetooth Speaker             | 1   | $89.99     |
| ORD-1004  | tom.becker@example.com    | 3 days    | Laptop Stand                  | 1   | $15.50     |

## UAT (http://localhost:3001)

| Order ID  | Customer                  | Age       | Item                          | Qty | Unit Price |
|-----------|----------------------------|-----------|-------------------------------|-----|------------|
| ORD-5001  | priya.nair@example.com    | 30 days   | Desk Lamp                     | 1   | $32.00     |
| ORD-5002  | chen.wei@example.com      | 12 days   | Notebook Set (3-pack)         | 2   | $40.00     |
| ORD-5003  | olu.adebayo@example.com   | 50 days   | Travel Mug                    | 1   | $18.25     |
| ORD-5004  | grace.kim@example.com     | 1 day     | Phone Case                    | 1   | $12.00     |

## PROD (http://localhost:3002)

| Order ID  | Customer               | Age     | Item               | Qty | Unit Price |
|-----------|-------------------------|---------|---------------------|-----|------------|
| ORD-9001  | customer-a@example.com | 5 days  | Wireless Keyboard  | 1   | $45.00     |
| ORD-9002  | customer-b@example.com | 40 days | Monitor Riser      | 1   | $27.75     |

## API reference

| Method | Path                  | Purpose                              |
|--------|------------------------|---------------------------------------|
| GET    | `/api/env`            | Returns current environment + read-only flag |
| GET    | `/api/orders/:orderId`| Look up an order                     |
| POST   | `/api/returns`        | Submit a return request              |
| GET    | `/api/returns`        | List all submitted returns (session-scoped, resets on restart) |

## A note on PROD

PROD is wired up like a real production environment would be for this kind
of exercise — think about what that implies before you point mutating
requests at it.
