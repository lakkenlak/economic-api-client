import z from 'zod';

/**
 * https://restapi.e-conomic.com/schema/customers.customerNumber.get.schema.json
 */
export const zGetCustomerResponse = z.object({
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
export type GetCustomerResponse = z.infer<typeof zGetCustomerResponse>;

/**
 * https://restapi.e-conomic.com/schema/customers.get.schema.json
 */
export const zGetCustomersResponse = z.object({
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
export type GetCustomersResponse = z.infer<typeof zGetCustomersResponse>;

/**
 * https://restapi.e-conomic.com/schema/customers.post.schema.json
 */
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
export type PostCustomer = z.infer<typeof zPostCustomer>;

/**
 * https://restapi.e-conomic.com/schema/invoices.drafts.get.schema.json
 */
export const zGetDraftInvoicesResponse = z.object({
  collection: z.array(
    z.object({
      draftInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
      date: z.string().optional(),
      currency: z.string(),
      exchangeRate: z.number().optional(),
      netAmount: z.number().optional(),
      netAmountInBaseCurrency: z.number().optional(),
      grossAmount: z.number().optional(),
      grossAmountInBaseCurrency: z.number().optional(),
      marginInBaseCurrency: z.number().optional(),
      marginPercentage: z.number().optional(),
      vatAmount: z.number().optional(),
      roundingAmount: z.number().optional(),
      costPriceInBaseCurrency: z.number().optional(),
      dueDate: z.string(),
      paymentTerms: z
        .object({
          paymentTermsNumber: z.number().optional(),
          daysOfCredit: z.number().optional(),
          description: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
          name: z.string().optional(),
          paymentTermsType: z
            .enum(['net', 'invoiceMonth', 'paidInCash', 'prepaid', 'dueDate', 'factoring', 'invoiceWeekStartingSunday', 'invoiceWeekStartingMonday', 'creditcard'])
            .optional(),
          self: z.string().url()
        })
        .optional(),
      customer: z
        .object({
          customerNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      recipient: z
        .object({
          name: z.string().optional(),
          address: z.string().optional(),
          zip: z.string().optional(),
          city: z.string().optional(),
          country: z.string().optional(),
          mobilePhone: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
          ean: z.string().optional(),
          publicEntryNumber: z.string().optional(),
          attention: z
            .object({
              customerContactNumber: z.number().optional(),
              self: z.string().url()
            })
            .optional(),
          vatZone: z
            .object({
              vatZoneNumber: z.number().optional(),
              enabledForCustomer: z.boolean().optional(), // NOT IN OFFICIAL JSON SCHEMA????
              enabledForSupplier: z.boolean().optional(), // NOT IN OFFICIAL JSON SCHEMA????
              name: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
              self: z.string().url()
            })
            .optional(),
          cvr: z.string().optional(),

          nemHandelType: z.enum(['ean', 'corporateIdentificationNumber', 'pNumber']).nullable().optional()
        })
        .optional(),

      deliveryLocation: z
        .object({
          deliveryLocationNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      delivery: z
        .object({
          address: z.string().optional(),
          zip: z.string().optional(),
          city: z.string().optional(),
          country: z.string().optional(),
          deliveryTerms: z.string().optional(),
          deliveryDate: z.string().optional()
        })
        .optional(),
      notes: z
        .object({
          heading: z.string().optional(),
          textLine1: z.string().optional(),
          textLine2: z.string().optional()
        })
        .optional(),
      references: z
        .object({
          customerContact: z
            .object({
              customerContactNumber: z.number().optional(),
              customer: z
                .object({
                  customerNumber: z.number().optional(),
                  self: z.string().url()
                })
                .optional(),
              self: z.string().url()
            })
            .optional(),
          salesPerson: z
            .object({
              employeeNumber: z.number().optional(),
              self: z.string().url()
            })
            .optional(),
          vendorReference: z
            .object({
              employeeNumber: z.number().optional(),
              self: z.string().url()
            })
            .optional(),
          other: z.string().optional()
        })
        .optional(),
      project: z
        .object({
          projectNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      lastUpdated: z.string().optional(),
      pdf: z
        .object({
          download: z.string().url()
        })
        .optional(),
      // all keys in this object is optional in the JSON schema, but we assume it's always present
      soap: z.object({
        currentInvoiceHandle: z.object({
          id: z.number() //.optional()
        }) //.optional(),
      }), //.optional(),
      templates: z
        .object({
          bookingInstructions: z.string().url(),
          self: z.string().url()
        })
        .optional(),

      self: z.string().url(),

      layout: z.object({
        layoutNumber: z.number(),
        self: z.string().url()
      })
    })
  ),
  pagination: z.object({
    maxPageSizeAllowed: z.number(),
    skipPages: z.number(),
    pageSize: z.number(),
    results: z.number(),
    resultsWithoutFilter: z.number(),
    developerHint: z.string().optional(),
    firstPage: z.string().url().optional(),
    lastPage: z.string().url().optional(),
    nextPage: z.string().url().optional()
  }),
  self: z.string().url()
});
export type GetDraftInvoicesResponse = z.infer<typeof zGetDraftInvoicesResponse>;

export const zGetDraftInvoiceResponse = z.object({
  draftInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
  date: z.string().optional(),
  currency: z.string(),
  exchangeRate: z.number().optional(),
  netAmount: z.number().optional(),
  netAmountInBaseCurrency: z.number().optional(),
  grossAmount: z.number().optional(),
  grossAmountInBaseCurrency: z.number().optional(),
  marginInBaseCurrency: z.number().optional(),
  marginPercentage: z.number().optional(),
  vatAmount: z.number().optional(),
  roundingAmount: z.number().optional(),
  costPriceInBaseCurrency: z.number().optional(),
  dueDate: z.string(),
  paymentTerms: z
    .object({
      paymentTermsNumber: z.number().optional(),
      daysOfCredit: z.number().optional(),
      description: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
      name: z.string().optional(),
      paymentTermsType: z
        .enum(['net', 'invoiceMonth', 'paidInCash', 'prepaid', 'dueDate', 'factoring', 'invoiceWeekStartingSunday', 'invoiceWeekStartingMonday', 'creditcard'])
        .optional(),
      self: z.string().url()
    })
    .optional(),
  customer: z
    .object({
      customerNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  recipient: z
    .object({
      name: z.string().optional(),
      address: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      mobilePhone: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
      ean: z.string().optional(),
      publicEntryNumber: z.string().optional(),
      attention: z
        .object({
          customerContactNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      vatZone: z
        .object({
          vatZoneNumber: z.number().optional(),
          enabledForCustomer: z.boolean().optional(), // NOT IN OFFICIAL JSON SCHEMA????
          enabledForSupplier: z.boolean().optional(), // NOT IN OFFICIAL JSON SCHEMA????
          name: z.string().optional(), // NOT IN OFFICIAL JSON SCHEMA????
          self: z.string().url()
        })
        .optional(),
      cvr: z.string().optional(),

      nemHandelType: z.enum(['ean', 'corporateIdentificationNumber', 'pNumber']).nullable().optional()
    })
    .optional(),

  deliveryLocation: z
    .object({
      deliveryLocationNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  delivery: z
    .object({
      address: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      deliveryTerms: z.string().optional(),
      deliveryDate: z.string().optional()
    })
    .optional(),
  notes: z
    .object({
      heading: z.string().optional(),
      textLine1: z.string().optional(),
      textLine2: z.string().optional()
    })
    .optional(),
  references: z
    .object({
      customerContact: z
        .object({
          customerContactNumber: z.number().optional(),
          customer: z
            .object({
              customerNumber: z.number().optional(),
              self: z.string().url()
            })
            .optional(),
          self: z.string().url()
        })
        .optional(),
      salesPerson: z
        .object({
          employeeNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      vendorReference: z
        .object({
          employeeNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      other: z.string().optional()
    })
    .optional(),
  project: z
    .object({
      projectNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  lastUpdated: z.string().optional(),
  pdf: z
    .object({
      download: z.string().url()
    })
    .optional(),
  // all keys in this object is optional in the JSON schema, but we assume it's always present
  soap: z.object({
    currentInvoiceHandle: z.object({
      id: z.number() //.optional()
    }) //.optional(),
  }), //.optional(),
  templates: z
    .object({
      bookingInstructions: z.string().url(),
      self: z.string().url()
    })
    .optional(),

  self: z.string().url(),

  // NOT IN OFFICIAL JSON SCHEMA????
  layout: z.object({
    layoutNumber: z.number(),
    self: z.string().url()
  }),
  lines: z
    .array(
      z.object({
        lineNumber: z.number(),
        sortKey: z.number().optional(),
        description: z.string(),
        accrual: z
          .object({
            startDate: z.string().optional(),
            endDate: z.string().optional()
          })
          .optional(),
        unit: z
          .object({
            unitNumber: z.number().optional(),
            name: z.string().optional(),
            self: z.string().url().optional(),
            products: z.string().url().optional()
          })
          .optional(),
        product: z
          .object({
            productNumber: z.string().optional(),
            self: z.string().url().optional()
          })
          .optional(),
        quantity: z.number().optional(),
        totalNetAmount: z.number().optional(),
        unitNetPrice: z.number().optional(),
        discountPercentage: z.number().optional(),
        unitCostPrice: z.number().optional(),
        marginInBaseCurrency: z.number().optional(),
        marginPercentage: z.number().optional(),
        departmentalDistribution: z
          .object({
            departmentalDistributionNumber: z.number().optional(),
            distributionType: z.string().optional()
          })
          .optional()
      })
    )
    .optional()
});
export type GetDraftInvoiceResponse = z.infer<typeof zGetDraftInvoiceResponse>;

export const zPostDraftInvoices = z.object({
  date: z.string(),
  currency: z.string(),
  exchangeRate: z.number().optional(),
  dueDate: z.string().optional(),
  layout: z.object({
    layoutNumber: z.number()
  }),
  project: z
    .object({
      projectNumber: z.number()
    })
    .optional(),
  paymentTerms: z.object({
    paymentTermsNumber: z.number()
  }),
  customer: z.object({
    customerNumber: z.number()
  }),
  recipient: z.object({
    name: z.string(),
    address: z.string().optional(),
    zip: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    ean: z.string().optional(),
    publicEntryNumber: z.string().optional(),
    attention: z
      .object({
        customerContactNumber: z.number()
      })
      .optional(),
    vatZone: z.object({
      vatZoneNumber: z.number()
    }),
    mobilePhone: z.string().optional(),
    nemHandelType: z.enum(['ean', 'corporateIdentificationNumber', 'pNumber']).nullable().optional()
  }),
  deliveryLocation: z
    .object({
      deliveryLocationNumber: z.number()
    })
    .optional(),
  delivery: z
    .object({
      address: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      deliveryTerms: z.string().optional(),
      deliveryDate: z.string().optional()
    })
    .optional(),
  notes: z
    .object({
      heading: z.string().optional(),
      textLine1: z.string().optional(),
      textLine2: z.string().optional()
    })
    .optional(),
  references: z
    .object({
      customerContact: z
        .object({
          customerContactNumber: z.number()
        })
        .optional(),
      salesPerson: z
        .object({
          employeeNumber: z.number()
        })
        .optional(),
      vendorReference: z
        .object({
          employeeNumber: z.number()
        })
        .optional(),
      other: z.string().optional()
    })
    .optional(),
  lines: z
    .array(
      z.object({
        lineNumber: z.number().optional(),
        sortKey: z.number().optional(),
        description: z.string().optional(),
        accrual: z
          .object({
            startDate: z.string().optional(),
            endDate: z.string().optional()
          })
          .optional(),
        unit: z
          .object({
            unitNumber: z.number().optional(),
            name: z.string().optional(),
            self: z.string().url().optional(),
            products: z.string().url().optional()
          })
          .optional(),
        product: z
          .object({
            productNumber: z.string().optional()
          })
          .optional(),
        quantity: z.number().optional(),
        unitNetPrice: z.number().optional(),
        discountPercentage: z.number().optional(),
        unitCostPrice: z.number().optional(),
        marginInBaseCurrency: z.number().optional(),
        marginPercentage: z.number().optional(),
        departmentalDistribution: z
          .object({
            departmentalDistributionNumber: z.number().optional(),
            distributionType: z.string().optional()
          })
          .optional()
      })
    )
    .optional()
});
export type PostDraftInvoice = z.infer<typeof zPostDraftInvoices>;

/**
 * https://restdocs.e-conomic.com/#post-invoices-booked
 */
export const zPostBookedInvoice = z.object({
  draftInvoice: z.object({
    draftInvoiceNumber: z.number()
  }),
  bookWithNumber: z.number().optional(),
  sendBy: z.enum(['none', 'ean']).optional()
});
export type PostBookedInvoice = z.infer<typeof zPostBookedInvoice>;

export const zPostBookedInvoiceResponse = z.object({
  bookWithNumber: z.number(),
  draftInvoice: z.object({
    draftInvoiceNumber: z.number(),
    self: z.string().url()
  }),
  sentBy: z.enum(['none', 'ean'])
});
export type PostBookedInvoiceResponse = z.infer<typeof zPostBookedInvoiceResponse>;
