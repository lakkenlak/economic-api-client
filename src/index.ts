import axios, { AxiosInstance } from 'axios';
import {
  GetCustomerResponseBody,
  GetCustomersResponseBody,
  PostCustomerRequestBody,
  PostCustomerResponseBody,
  zGetCustomerResponseBody,
  zGetCustomersResponseBody
} from './customers';
import {
  GetDraftInvoiceResponseBody,
  GetDraftInvoicesResponseBody,
  PostDraftInvoiceRequestBody,
  PostDraftInvoiceResponseBody,
  zGetDraftInvoiceResponseBody,
  zGetDraftInvoicesResponseBody
} from './draftInvoice';
import {
  GetBookedInvoiceResponseBody,
  GetBookedInvoicesResponseBody,
  PostBookedInvoiceRequestBody,
  PostBookedInvoiceResponseBody,
  zGetBookedInvoiceResponseBody,
  zGetBookedInvoicesResponseBody
} from './bookedInvoices';

class EconomicClient implements EconomicClient {
  public axiosClient: AxiosInstance;
  constructor(private readonly X_APP_SECRET_TOKEN: string, private readonly X_AGREEMENT_GRANT_TOKEN: string) {
    this.axiosClient = axios.create({
      baseURL: 'https://restapi.e-conomic.com',
      headers: {
        'X-AppSecretToken': this.X_APP_SECRET_TOKEN,
        'X-AgreementGrantToken': this.X_AGREEMENT_GRANT_TOKEN
      }
    });
  }

  public customers = {
    get: async (queryString: string = ''): Promise<GetCustomersResponseBody> => {
      const response = await this.axiosClient.get(`/customers${queryString}`);
      return await zGetCustomersResponseBody.parseAsync(response.data);
    },
    getOne: async (customerNumber: number): Promise<GetCustomerResponseBody> => {
      const response = await this.axiosClient.get(`/customers/${customerNumber}`);
      return await zGetCustomerResponseBody.parseAsync(response.data);
    },
    post: async (customer: PostCustomerRequestBody): Promise<PostCustomerResponseBody> => {
      const response = await this.axiosClient.post('/customers', customer);
      return await zGetCustomerResponseBody.parseAsync(response.data);
    },
    delete: async (customerNumber: number): Promise<void> => {
      await this.axiosClient.delete(`/customers/${customerNumber}`);
    }
  };
  public draftInvoices = {
    get: async (queryString: string = ''): Promise<GetDraftInvoicesResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/drafts${queryString}`);
      return await zGetDraftInvoicesResponseBody.parseAsync(response.data.collection);
    },
    getOne: async (customerNumber: number): Promise<GetDraftInvoiceResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/drafts${customerNumber}`);
      return await zGetDraftInvoiceResponseBody.parseAsync(response.data);
    },
    post: async (customer: PostDraftInvoiceRequestBody): Promise<PostDraftInvoiceResponseBody> => {
      const response = await this.axiosClient.post('/invoices/drafts', customer);
      return await zGetDraftInvoiceResponseBody.parseAsync(response.data);
    },
    delete: async (customerNumber: number): Promise<void> => {
      await this.axiosClient.delete(`/invoices/drafts/${customerNumber}`);
    }
  };
  public bookedInvoices = {
    get: async (queryString: string = ''): Promise<GetBookedInvoicesResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/booked${queryString}`);
      return await zGetBookedInvoicesResponseBody.parseAsync(response.data);
    },
    getOne: async (customerNumber: number): Promise<GetBookedInvoiceResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/booked${customerNumber}`);
      return await zGetBookedInvoiceResponseBody.parseAsync(response.data);
    },
    post: async (customer: PostBookedInvoiceRequestBody): Promise<PostBookedInvoiceResponseBody> => {
      const response = await this.axiosClient.post('/invoices/booked', customer);
      return await zGetBookedInvoiceResponseBody.parseAsync(response.data);
    }
  };
}

export default EconomicClient;

export {
  GetCustomerResponseBody,
  GetCustomersResponseBody,
  PostCustomerRequestBody,
  PostCustomerResponseBody,
  zGetCustomerResponseBody,
  zGetCustomersResponseBody,
  GetDraftInvoiceResponseBody,
  GetDraftInvoicesResponseBody,
  PostDraftInvoiceRequestBody,
  PostDraftInvoiceResponseBody,
  zGetDraftInvoiceResponseBody,
  zGetDraftInvoicesResponseBody,
  GetBookedInvoiceResponseBody,
  GetBookedInvoicesResponseBody,
  PostBookedInvoiceRequestBody,
  PostBookedInvoiceResponseBody
};
