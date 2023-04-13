import 'dotenv/config';
import { EconomicREST } from '../src/index';
import { GetDraftInvoiceResponse, zGetCustomerResponse, zGetCustomersResponse, zGetDraftInvoiceResponse, zGetDraftInvoicesResponse } from '../src/zod';
import { AxiosError } from 'axios';

let draftInvoiceResponse: GetDraftInvoiceResponse;

if (!process.env.X_APP_SECRET_TOKEN || !process.env.X_AGREEMENT_GRANT_TOKEN) {
  throw new Error('Missing environment variables');
}

const economicClient = new EconomicREST(process.env.X_APP_SECRET_TOKEN, process.env.X_AGREEMENT_GRANT_TOKEN);

describe('EconomicREST', () => {
  describe('customers', () => {
    describe('post', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.post({
          currency: 'DKK',
          customerGroup: {
            customerGroupNumber: 2
          },
          customerNumber: 2,
          name: 'Test Customer',
          paymentTerms: {
            paymentTermsNumber: 1
          },
          vatZone: {
            vatZoneNumber: 1
          }
        });
        expect(response).toEqual(zGetCustomerResponse.parse(response));
      });
    });
    describe('get', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.get('?pagesize=1000');
        expect(response).toEqual(zGetCustomersResponse.parse(response));
      });
    });
    describe('getByCustomerNumber', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.getByCustomerNumber(2);
        expect(response).toEqual(zGetCustomerResponse.parse(response));
      });
    });
    describe('delete', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.delete(2);
        expect(response).toBe(undefined);
      });
    });
  });
  describe('invoices', () => {
    describe('post', () => {
      test('should return proper response', async () => {
        try {
          draftInvoiceResponse = await economicClient.invoices.drafts.post({
            currency: 'DKK',
            date: '2021-01-01',
            paymentTerms: {
              paymentTermsNumber: 1
            },
            customer: {
              customerNumber: 1
            },
            layout: {
              layoutNumber: 21
            },
            recipient: {
              name: 'Test Customer',
              vatZone: {
                vatZoneNumber: 1
              }
            },
            lines: [
              {
                description: 'Test',
                quantity: 1,
                product: {
                  productNumber: '1'
                },
                discountPercentage: 20,
                unitNetPrice: 100,
                unit: {
                  unitNumber: 1
                }
              },
              {
                description: 'Test',
                quantity: 1,
                product: {
                  productNumber: '1'
                },
                discountPercentage: 20,
                unitNetPrice: 100,
                unit: {
                  unitNumber: 1
                }
              }
            ]
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error.response?.data);
          }
          throw error;
        }
        expect(draftInvoiceResponse).toEqual(zGetDraftInvoiceResponse.parse(draftInvoiceResponse));
      });
    });
    describe('drafts', () => {
      describe('get', () => {
        test('should return proper response', async () => {
          const response = await economicClient.invoices.drafts.get('?pagesize=1000');
          expect(response).toEqual(zGetDraftInvoicesResponse.parse(response));
        });
      });
      describe('getByDraftInvoiceNumber', () => {
        test('should return proper response', async () => {
          const response = await economicClient.invoices.drafts.getByDraftInvoiceNumber(draftInvoiceResponse.draftInvoiceNumber);
          console.log(response);
          expect(response).toEqual(zGetDraftInvoiceResponse.parse(response));
        });
      });
      describe('delete', () => {
        test('should return proper response', async () => {
          const response = await economicClient.invoices.drafts.delete(draftInvoiceResponse.draftInvoiceNumber);
          expect(response).toBe(undefined);
        });
      });
    });
    /*     describe('book', () => {
      test('should return proper response', async () => {
        // create draft invoice to book
        draftInvoiceResponse = await economicClient.invoices.drafts.post({
          currency: 'DKK',
          date: '2023-05-15',
          paymentTerms: {
            paymentTermsNumber: 1
          },
          customer: {
            customerNumber: 1
          },
          layout: {
            layoutNumber: 21
          },
          recipient: {
            name: 'Test Customer',
            vatZone: {
              vatZoneNumber: 1
            }
          },
          lines: [
            {
              description: 'Test',
              quantity: 1,
              product: {
                productNumber: '1'
              },
              discountPercentage: 20,
              unitNetPrice: 100,
              unit: {
                unitNumber: 1
              }
            },
            {
              description: 'Test',
              quantity: 1,
              product: {
                productNumber: '1'
              },
              discountPercentage: 20,
              unitNetPrice: 100,
              unit: {
                unitNumber: 1
              }
            }
          ]
        });

        let response;

        try {
          response = await economicClient.invoices.booked.post({
            draftInvoice: {
              draftInvoiceNumber: draftInvoiceResponse.draftInvoiceNumber
            }
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(JSON.stringify(error.response?.data));
          }
          throw error;
        }
        expect(response).toEqual(zGetDraftInvoiceResponse.parse(response));
      });
    });
*/
  });
});
