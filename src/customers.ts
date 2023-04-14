import z from 'zod';

/**
 * https://restapi.e-conomic.com/schema/customers.get.schema.json
 */
export const zGetCustomersResponseBody = z
  .object({
    collection: z.array(
      z.object({
        //required values
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
        self: z.string().url(),
        //optional values
        email: z.string().optional(),
        mobilePhone: z.string().optional(),
        telephoneAndFaxNumber: z.string().optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
        vatNumber: z.string().optional(),
        pNumber: z.string().optional(),
        publicEntryNumber: z.string().optional(),
        ean: z.string().optional(),
        corporateIdentificationNumber: z.string().optional(),
        barred: z.boolean().optional(),
        creditLimit: z.number().optional(),
        layout: z
          .object({
            layoutNumber: z.number(),
            self: z.string().url()
          })
          .optional()
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
  })
  .passthrough();

/**
 * https://restapi.e-conomic.com/schema/customers.customerNumber.get.schema.json
 */
export const zGetCustomerResponseBody = z
  .object({
    //required values
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
    metaData: z.any(),
    self: z.string().url(),
    //optional values
    email: z.string().optional(),
    mobilePhone: z.string().optional(),
    telephoneAndFaxNumber: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
    vatNumber: z.string().optional(),
    pNumber: z.string().optional(),
    publicEntryNumber: z.string().optional(),
    ean: z.string().optional(),
    corporateIdentificationNumber: z.string().optional(),
    barred: z.boolean().optional(),
    creditLimit: z.number().optional(),
    layout: z
      .object({
        layoutNumber: z.number(),
        self: z.string().url()
      })
      .optional()
  })
  .passthrough();

/**
 * https://restapi.e-conomic.com/schema/customers.post.schema.json
 */
export const zPostCustomerRequestBody = z
  .object({
    //required values
    paymentTerms: z.object({
      paymentTermsNumber: z.number()
    }),
    customerGroup: z.object({
      customerGroupNumber: z.number()
    }),
    vatZone: z.object({
      vatZoneNumber: z.number()
    }),
    currency: z.string(),
    name: z.string(),
    //optional values
    email: z.string().optional(),
    mobilePhone: z.string().optional(),
    telephoneAndFaxNumber: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
    vatNumber: z.string().optional(),
    pNumber: z.string().optional(),
    publicEntryNumber: z.string().optional(),
    ean: z.string().optional(),
    corporateIdentificationNumber: z.string().optional(),
    customerNumber: z.string().optional(),
    website: z.string().optional(),
    barred: z.boolean().optional(),
    creditLimit: z.number().optional(),
    eInvoicingDisabledByDefault: z.boolean().optional(),
    layout: z
      .object({
        layoutNumber: z.number()
      })
      .optional()
  })
  .passthrough();

export type GetCustomersResponseBody = z.infer<typeof zGetCustomersResponseBody>;
export type GetCustomerResponseBody = z.infer<typeof zGetCustomerResponseBody>;
export type PostCustomerRequestBody = z.infer<typeof zPostCustomerRequestBody>;
export type PostCustomerResponseBody = GetCustomerResponseBody;
