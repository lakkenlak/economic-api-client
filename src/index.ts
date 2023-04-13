import axios, { AxiosInstance } from 'axios';
class EconomicREST {
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

  public customers = {};
  public invoices = {
    drafts: {},
    booked: {}
  };
}

const economicClient = new EconomicREST('X-AppSecretToken', 'X-AgreementGrantToken');
