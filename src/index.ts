import axios, { AxiosInstance } from 'axios';
import {
  GetCustomerResponse,
  GetCustomersResponse,
  GetDraftInvoiceResponse,
  GetDraftInvoicesResponse,
  PostBookedInvoice,
  PostBookedInvoiceResponse,
  PostCustomer,
  PostDraftInvoice,
  zGetCustomerResponse,
  zGetCustomersResponse,
  zPostCustomer,
  zGetDraftInvoicesResponse,
  zGetDraftInvoiceResponse,
  zPostDraftInvoices,
  zPostBookedInvoice,
  zPostBookedInvoiceResponse
} from './zod';

export class EconomicREST {
  public axiosClient: AxiosInstance;

  constructor(private XAppSecretToken: string, private XAgreementGrantToken: string) {
    this.axiosClient = axios.create({
      baseURL: 'https://restapi.e-conomic.com',
      headers: {
        'X-AppSecretToken': this.XAppSecretToken,
        'X-AgreementGrantToken': this.XAgreementGrantToken,
        'Content-Type': 'application/json'
      }
    });
  }

  public customers = {
    get: async (queryString: string = ''): Promise<GetCustomersResponse> => {
      const response = await this.axiosClient.get(`/customers${queryString}`);
      return response.data;
    },
    getByCustomerNumber: async (customerNumber: number): Promise<GetCustomerResponse> => {
      const response = await this.axiosClient.get(`/customers/${customerNumber}`);
      return response.data;
    },
    post: async (customer: PostCustomer): Promise<GetCustomerResponse> => {
      const response = await this.axiosClient.post('/customers', customer);
      return response.data;
    },
    delete: async (customerNumber: number): Promise<void> => {
      const response = await this.axiosClient.delete(`/customers/${customerNumber}`);
    }
  };
  public invoices = {
    drafts: {
      get: async (queryString: string = ''): Promise<GetDraftInvoicesResponse> => {
        const response = await this.axiosClient.get(`/invoices/drafts${queryString}`);
        return response.data;
      },
      getByDraftInvoiceNumber: async (draftInvoiceNumber: number): Promise<GetDraftInvoiceResponse> => {
        const response = await this.axiosClient.get(`/invoices/drafts/${draftInvoiceNumber}`);
        return response.data;
      },
      post: async (draftInvoice: PostDraftInvoice): Promise<GetDraftInvoiceResponse> => {
        const response = await this.axiosClient.post('/invoices/drafts', draftInvoice);
        return response.data;
      },
      delete: async (draftInvoiceNumber: number): Promise<void> => {
        await this.axiosClient.delete(`/invoices/drafts/${draftInvoiceNumber}`);
      }
    },
    booked: {
      post: async (bookBody: PostBookedInvoice): Promise<PostBookedInvoiceResponse> => {
        const response = await this.axiosClient.post('/invoices/booked', bookBody);
        return response.data;
      }
    }
  };
}

const economicClient = new EconomicREST('X-AppSecretToken', 'X-AgreementGrantToken');

export default economicClient;
export {
  GetCustomerResponse,
  GetCustomersResponse,
  PostCustomer,
  GetDraftInvoicesResponse,
  GetDraftInvoiceResponse,
  PostDraftInvoice,
  PostBookedInvoice,
  PostBookedInvoiceResponse,
  zGetCustomerResponse,
  zGetCustomersResponse,
  zPostCustomer,
  zGetDraftInvoicesResponse,
  zGetDraftInvoiceResponse,
  zPostDraftInvoices,
  zPostBookedInvoice,
  zPostBookedInvoiceResponse
};
