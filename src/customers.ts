import z from 'zod';

/**
 * https://restapi.e-conomic.com/schema/customers.customerNumber.get.schema.json
 */
export const zGetCustomersResponseBody = z.object({
  address: z.string().optional(),
  balance: z.number().optional(),
  barred: z.boolean().optional(),
  city: z.string().optional(),
  contacts: z.string().url().optional(),
  corporateIdentificationNumber: z.string().optional(),
  pNumber: z.string().optional(),
  country: z.string().optional(),
  creditLimit: z.number().optional(),
  currency: z.string(),
  customerNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
  deliveryLocations: z.string().url().optional(),
  defaultDeliveryLocation: z
    .object({
      deliveryLocationNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  dueAmount: z.number().optional(),
  ean: z.string().optional(),
  email: z.string().optional(),
  invoices: z
    .object({
      drafts: z.string().url().optional(),
      booked: z.string().url().optional(),
      self: z.string().url()
    })
    .optional(),
  lastUpdated: z.string().optional(),
  name: z.string(),
  publicEntryNumber: z.string().optional(),
  telephoneAndFaxNumber: z.string().optional(),
  mobilePhone: z.string().optional(),
  eInvoicingDisabledByDefault: z.boolean().optional(),
  templates: z
    .object({
      invoice: z.string().url().optional(),
      invoiceLine: z.string().url().optional(),
      self: z.string().url()
    })
    .optional(),
  totals: z
    .object({
      drafts: z.string().url().optional(),
      booked: z.string().url().optional(),
      self: z.string().url()
    })
    .optional(),
  vatNumber: z.string().optional(),
  website: z.string().optional(),
  zip: z.string().optional(),
  attention: z
    .object({
      customerContactNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  customerContact: z
    .object({
      customerContactNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  customerGroup: z.object({
    customerGroupNumber: z.number().optional(),
    self: z.string().url()
  }),
  layout: z
    .object({
      layoutNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  paymentTerms: z.object({
    paymentTermsNumber: z.number().optional(),
    self: z.string().url()
  }),
  salesPerson: z
    .object({
      employeeNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  vatZone: z.object({
    vatZoneNumber: z.number().optional(),
    self: z.string().url()
  }),
  metaData: z.any(),
  self: z.string().url()
});

/**
 * https://restapi.e-conomic.com/schema/customers.get.schema.json
 */
export const zGetCustomerRequestBody = z.object({
  collection: z.array(
    z.object({
      address: z.string().optional(),
      balance: z.number().optional(),
      barred: z.boolean().optional(),
      city: z.string().optional(),
      corporateIdentificationNumber: z.string().optional(),
      pNumber: z.string().optional(),
      country: z.string().optional(),
      creditLimit: z.number().optional(),
      currency: z.string(),
      customerNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
      dueAmount: z.number().optional(),
      ean: z.string().optional(),
      email: z.string().optional(),
      lastUpdated: z.string().optional(),
      name: z.string(),
      publicEntryNumber: z.string().optional(),
      telephoneAndFaxNumber: z.string().optional(),
      mobilePhone: z.string().optional(),
      eInvoicingDisabledByDefault: z.boolean().optional(),
      vatNumber: z.string().optional(),
      website: z.string().optional(),
      zip: z.string().optional(),
      contacts: z.string().url().optional(),

      deliveryLocations: z.string().url().optional(),
      defaultDeliveryLocation: z
        .object({
          deliveryLocationNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      attention: z
        .object({
          customerContactNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      customerContact: z
        .object({
          customerContactNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      customerGroup: z.object({
        customerGroupNumber: z.number().optional(),
        self: z.string().url()
      }),
      layout: z
        .object({
          layoutNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      paymentTerms: z.object({
        paymentTermsNumber: z.number().optional(),
        self: z.string().url()
      }),
      salesPerson: z
        .object({
          employeeNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      vatZone: z.object({
        vatZoneNumber: z.number().optional(),
        self: z.string().url()
      }),
      templates: z
        .object({
          invoice: z.string().url().optional(),
          invoiceLine: z.string().url().optional(),
          self: z.string().url()
        })
        .optional(),
      totals: z
        .object({
          drafts: z.string().url().optional(),
          booked: z.string().url().optional(),
          self: z.string().url()
        })
        .optional(),
      invoices: z
        .object({
          drafts: z.string().url().optional(),
          booked: z.string().url().optional(),
          self: z.string().url()
        })
        .optional(),
      self: z.string().url()
    })
  ),
  pagination: z.object({
    maxPageSizeAllowed: z.number(),
    skipPages: z.number(),
    pageSize: z.number(),
    results: z.number(),
    resultsWithoutFilter: z.number(),
    firstPage: z.string().url(),
    lastPage: z.string().url(),
    nextPage: z.string().url().optional(),
    previousPage: z.string().url().optional()
  }),
  metaData: z.any(),
  self: z.string().url()
});

/**
 * https://restapi.e-conomic.com/schema/customers.post.schema.json
 */
export const zPostCustomerRequestBody = z.object({
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
  customerNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
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
    .optional(),
  priceGroup: z
    .object({
      self: z.string().url()
    })
    .optional()
});

export type GetCustomersResponseBody = z.infer<typeof zGetCustomersResponseBody>;
export type GetCustomerResponseBody = z.infer<typeof zGetCustomerRequestBody>;
export type PostCustomerRequestBody = z.infer<typeof zPostCustomerRequestBody>;
export type PostCustomerResponseBody = GetCustomerResponseBody;
