import axios, { AxiosInstance } from 'axios';
import { Customer, GetCustomersResponse, PostCustomer } from './zod';

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
    getByCustomerNumber: async (customerNumber: number): Promise<Customer> => {
      const response = await this.axiosClient.get(`/customers/${customerNumber}`);
      return response.data;
    },
    post: async (customer: PostCustomer): Promise<Customer> => {
      const response = await this.axiosClient.post('/customers', customer);
      return response.data;
    }
  };
  public invoices = {
    drafts: {},
    booked: {}
  };
}

const economicClient = new EconomicREST('X-AppSecretToken', 'X-AgreementGrantToken');
