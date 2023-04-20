# economic-api-client

An API client that interfaces with the Visma E-conomic REST API.
Uses the ZOD library to validate responses and ensure type safety, trying to stay as true as possible to the JSON schemas provided by e-conomic, although some assumptions are made about the responses such as always expecting some values that are not specified as required in the JSON schema but are always present, such as customerNumber, draftInvoiceNumber and bookedInvoiceNumber.

- https://restdocs.e-conomic.com/

## Currently implemented endpoints

### /customers

- GET /customers
- GET /customers/:customerNumber
- POST /customers
- DELETE /customers/:customerNumber

### /invoices/drafts

- GET /invoices/drafts
- GET /invoices/drafts/:draftInvoiceNumber
- GET /invoices/drafts/:draftInvoiceNumber/pdf
- POST /invoices/drafts
- PUT /invoices/drafts
- DELETE /invoices/drafts/:draftInvoiceNumber

### /invoices/booked

- GET /invoices/booked
- GET /invoices/booked/:bookedInvoiceNumber
- GET /invoices/booked/:bookedInvoiceNumber/pdf
- POST /invoices/booked/

## Usage example

```typescript
const economicClient = new EconomicClient(process.env.X_APP_SECRET_TOKEN, process.env.X_AGREEMENT_GRANT_TOKEN);

economicClient.customers.get().then((res) => {
  console.log(res);
});
```
