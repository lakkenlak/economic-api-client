import { z } from 'zod';

/**
 * https://restapi.e-conomic.com/schema/invoices.booked.get.schema.json
 */
export const zGetBookedInvoicesResponseBody = z
  .object({
    collection: z.array(
      z.object({
        bookedInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
        date: z.string(),
        currency: z.string(),
        exchangeRate: z.number(),
        netAmount: z.number(),
        netAmountInBaseCurrency: z.number(),
        grossAmount: z.number(),
        grossAmountInBaseCurrency: z.number(),
        vatAmount: z.number(),
        roundingAmount: z.number(),
        remainder: z.number().optional(),
        remainderInBaseCurrency: z.number().optional(),
        dueDate: z.string(),
        paymentTerms: z.object({
          paymentTermsNumber: z.number(),
          daysOfCredit: z.number(),
          description: z.string(),
          name: z.string(),
          paymentTermsType: z.string(),
          self: z.string().url()
        }),
        customer: z.object({
          customerNumber: z.number(),
          name: z.string()
        }),
        recipient: z.object({
          name: z.string(),
          vatZone: z.object({
            name: z.string(),
            vatZoneNumber: z.number(),
            enabledForCustomer: z.boolean().optional(),
            enabledForSupplier: z.boolean().optional(),
            self: z.string().url()
          }),
          address: z.string().optional(), //OPTIONAL
          attention: z
            .object({
              customerContactNumber: z.number(),
              self: z.string().url()
            })
            .optional(), //OPTIONAL
          city: z.string().optional(), //OPTIONAL
          country: z.string().optional(), //OPTIONAL
          cvr: z.string().optional(), //OPTIONAL
          ean: z.string().optional(), //OPTIONAL
          mobilePhone: z.string().optional(), //OPTIONAL
          nemHandelType: z.string().optional(), //OPTIONAL
          publicEntryNumber: z.string().optional(), //OPTIONAL
          zip: z.string().optional() //OPTIONAL
        }),
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
        pdf: z.object({
          download: z.string().url()
        }),
        layout: z.object({
          layoutNumber: z.number(),
          self: z.string().url()
        }),
        project: z
          .object({
            projectNumber: z.number().optional(),
            self: z.string().url()
          })
          .optional(),
        sent: z.string().optional(),
        self: z.string().url()
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
  })
  .passthrough();

/**
 * https://restapi.e-conomic.com/schema/invoices.booked.bookedInvoiceNumber.get.schema.json
 */
export const zGetBookedInvoiceResponseBody = z
  .object({
    bookedInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
    date: z.string(),
    currency: z.string(),
    exchangeRate: z.number(),
    netAmount: z.number(),
    netAmountInBaseCurrency: z.number(),
    grossAmount: z.number(),
    grossAmountInBaseCurrency: z.number(),
    vatAmount: z.number(),
    roundingAmount: z.number(),
    remainder: z.number().optional(),
    remainderInBaseCurrency: z.number().optional(),
    dueDate: z.string(),
    paymentTerms: z.object({
      paymentTermsNumber: z.number(),
      daysOfCredit: z.number(),
      description: z.string(),
      name: z.string(),
      paymentTermsType: z.string(),
      self: z.string().url()
    }),
    customer: z.object({
      customerNumber: z.number(),
      name: z.string()
    }),
    recipient: z.object({
      name: z.string(),
      vatZone: z.object({
        name: z.string(),
        vatZoneNumber: z.number(),
        enabledForCustomer: z.boolean().optional(),
        enabledForSupplier: z.boolean().optional(),
        self: z.string().url()
      }),
      address: z.string().optional(), //OPTIONAL
      attention: z
        .object({
          customerContactNumber: z.number(),
          self: z.string().url()
        })
        .optional(), //OPTIONAL
      city: z.string().optional(), //OPTIONAL
      country: z.string().optional(), //OPTIONAL
      cvr: z.string().optional(), //OPTIONAL
      ean: z.string().optional(), //OPTIONAL
      mobilePhone: z.string().optional(), //OPTIONAL
      nemHandelType: z.string().optional(), //OPTIONAL
      publicEntryNumber: z.string().optional(), //OPTIONAL
      zip: z.string().optional() //OPTIONAL
    }),
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
    pdf: z.object({
      download: z.string().url()
    }),
    layout: z.object({
      layoutNumber: z.number(),
      self: z.string().url()
    }),
    project: z
      .object({
        projectNumber: z.number().optional(),
        self: z.string().url()
      })
      .optional(),
    sent: z.string().optional(),
    self: z.string().url()
  })
  .passthrough();

/**
 * https://restdocs.e-conomic.com/#post-invoices-booked
 */
export const zPostBookedInvoiceRequestBody = z
  .object({
    draftInvoice: z.object({
      draftInvoiceNumber: z.number()
    }),
    bookWithNumber: z.number().optional(),
    sendBy: z.enum(['none', 'ean']).optional()
  })
  .passthrough();

export type GetBookedInvoicesResponseBody = z.infer<typeof zGetBookedInvoicesResponseBody>;
export type GetBookedInvoiceResponseBody = z.infer<typeof zGetBookedInvoiceResponseBody>;
export type PostBookedInvoiceRequestBody = z.infer<typeof zPostBookedInvoiceRequestBody>;
export type PostBookedInvoiceResponseBody = GetBookedInvoiceResponseBody;
