import 'dotenv/config';
import { EconomicREST } from '../src/index';
import { zCustomer, zGetCustomerResponse, zGetCustomersResponse } from '../src/zod';

if (!process.env.X_APP_SECRET_TOKEN || !process.env.X_AGREEMENT_GRANT_TOKEN) {
  throw new Error('Missing environment variables');
}

const economicClient = new EconomicREST(process.env.X_APP_SECRET_TOKEN, process.env.X_AGREEMENT_GRANT_TOKEN);

describe('EconomicREST', () => {
  describe('customers', () => {
    describe('get', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.get();
        expect(response).toEqual(zGetCustomersResponse.parse(response));
      });
    });
    describe('getByCustomerNumber', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.getByCustomerNumber(1);
        expect(response).toEqual(zGetCustomerResponse.parse(response));
      });
    });
    describe('post', () => {
      test('should return proper response', async () => {
        const response = await economicClient.customers.post({
          currency: 'DKK',
          customerGroup: {
            customerGroupNumber: 2
          },
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
  });
});
