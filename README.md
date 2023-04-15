# economic-api-client

An API client that interfaces with the Visma E-conomic REST API

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
- POST /invoices/drafts
- POST /invoices/drafts
- DELETE /invoices/drafts/:draftInvoiceNumber

## Usage example

```typescript
const economicClient = new EconomicClient(process.env.X_APP_SECRET_TOKEN, process.env.X_AGREEMENT_GRANT_TOKEN);

economicClient.customers.get().then((res) => {
  console.log(res);
});
```
