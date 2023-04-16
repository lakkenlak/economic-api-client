import axios, { AxiosInstance, ResponseType } from 'axios';
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
      // prevent accidental deletion of all customers
      if (typeof customerNumber !== 'number') throw new Error('customerNumber must be a number');
      if (customerNumber < 1) throw new Error('customerNumber must be greater than 0');
      await this.axiosClient.delete(`/customers/${customerNumber}`);
    }
  };
  public draftInvoices = {
    get: async (queryString: string = ''): Promise<GetDraftInvoicesResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/drafts${queryString}`);
      return await zGetDraftInvoicesResponseBody.parseAsync(response.data);
    },
    getOne: async (draftInvoiceNumber: number): Promise<GetDraftInvoiceResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/drafts/${draftInvoiceNumber}`);
      return await zGetDraftInvoiceResponseBody.parseAsync(response.data);
    },
    getOnePDF: async (draftInvoiceNumber: number, responseType: ResponseType = 'arraybuffer') => {
      const response = await this.axiosClient.get(`/invoices/drafts/${draftInvoiceNumber}/pdf`, {
        responseType
      });
      return response.data;
    },
    post: async (draftInvoice: PostDraftInvoiceRequestBody): Promise<PostDraftInvoiceResponseBody> => {
      const response = await this.axiosClient.post('/invoices/drafts', draftInvoice);
      return await zGetDraftInvoiceResponseBody.parseAsync(response.data);
    },
    delete: async (draftInvoiceNumber: number): Promise<void> => {
      // prevent accidental deletion of all draftInvoices
      if (typeof draftInvoiceNumber !== 'number') throw new Error('draftInvoiceNumber must be a number');
      if (draftInvoiceNumber < 1) throw new Error('draftInvoiceNumber must be greater than 0');
      await this.axiosClient.delete(`/invoices/drafts/${draftInvoiceNumber}`);
    }
  };
  public bookedInvoices = {
    get: async (queryString: string = ''): Promise<GetBookedInvoicesResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/booked${queryString}`);
      return await zGetBookedInvoicesResponseBody.parseAsync(response.data);
    },
    getOne: async (bookedInvoiceNumber: number): Promise<GetBookedInvoiceResponseBody> => {
      const response = await this.axiosClient.get(`/invoices/booked/${bookedInvoiceNumber}`);
      return await zGetBookedInvoiceResponseBody.parseAsync(response.data);
    },
    getOnePDF: async (bookedInvoiceNumber: number, responseType: ResponseType = 'arraybuffer') => {
      const response = await this.axiosClient.get(`/invoices/booked/${bookedInvoiceNumber}/pdf`, {
        responseType
      });
      return response.data;
    },
    post: async (bookedInvoiceRequestBody: PostBookedInvoiceRequestBody): Promise<PostBookedInvoiceResponseBody> => {
      const response = await this.axiosClient.post('/invoices/booked', bookedInvoiceRequestBody);
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
