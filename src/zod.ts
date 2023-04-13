import z, { ZodRawShape } from 'zod';

export const zCustomer = z.object({
  customerNumber: z.number(),
  currency: z.string(),
  paymentTerms: z.object({
    paymentTermsNumber: z.number(),
    self: z.string().url()
  }),
  customerGroup: z.object({
    customerGroupNumber: z.number(),
    self: z.string().url()
  }),
  balance: z.number(),
  dueAmount: z.number(),
  name: z.string(),
  vatZone: z.object({
    vatZoneNumber: z.number(),
    self: z.string().url()
  }),
  lastUpdated: z.string(),
  contacts: z.string().url(),
  templates: z.object({
    invoice: z.string().url(),
    invoiceLine: z.string().url(),
    self: z.string().url()
  }),
  totals: z.object({
    drafts: z.string().url(),
    booked: z.string().url(),
    self: z.string().url()
  }),
  deliveryLocations: z.string().url(),
  invoices: z.object({
    drafts: z.string().url(),
    booked: z.string().url(),
    self: z.string().url()
  }),
  eInvoicingDisabledByDefault: z.boolean(),
  self: z.string().url()
});
export type Customer = z.infer<typeof zCustomer>;

export const zGetCustomerResponse = zCustomer.extend({
  metaData: z.any()
});

export const zGetCustomersResponse = z.object({
  collection: z.array(zCustomer),
  pagination: z.object({
    maxPageSizeAllowed: z.number(),
    skipPages: z.number(),
    pageSize: z.number(),
    results: z.number(),
    resultsWithoutFilter: z.number(),
    firstPage: z.string().url(),
    lastPage: z.string().url()
  }),
  metaData: z.any(),
  self: z.string().url()
});
export type GetCustomersResponse = z.infer<typeof zGetCustomersResponse>;

export const zPostCustomer = z.object({
  barred: z.boolean().optional(),
  address: z.string().optional(),
  corporateIdentificationNumber: z.string().optional(),
  pNumber: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  creditLimit: z.number().optional(),
  currency: z.string(),
  customerGroup: z.object({
    customerGroupNumber: z.number()
  }),
  customerNumber: z.number().optional(),
  ean: z.string().optional(),
  email: z.string().optional(),
  vatZone: z.object({
    vatZoneNumber: z.number()
  }),
  layout: z
    .object({
      layoutNumber: z.number()
    })
    .optional(),
  name: z.string(),
  paymentTerms: z.object({
    paymentTermsNumber: z.number()
  }),
  zip: z.string().optional(),
  publicEntryNumber: z.string().optional(),
  telephoneAndFaxNumber: z.string().optional(),
  mobilePhone: z.string().optional(),
  vatNumber: z.string().optional(),
  website: z.string().optional(),
  salesPerson: z
    .object({
      salesPersonNumber: z.number()
    })
    .optional()
});
export type PostCustomer = z.infer<typeof zPostCustomer>;
