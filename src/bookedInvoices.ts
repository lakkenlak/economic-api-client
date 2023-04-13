import { z } from 'zod';

/**
 * https://restapi.e-conomic.com/schema/invoices.booked.get.schema.json
 */
const zGetBookedInvoicesResponseBody = z.object({
  collection: z.array(
    z.object({
      bookedInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
      date: z.string().optional(),
      currency: z.string().optional(),
      exchangeRate: z.number().optional(),
      netAmount: z.number().optional(),
      netAmountInBaseCurrency: z.number().optional(),
      grossAmount: z.number().optional(),
      grossAmountInBaseCurrency: z.number().optional(),
      vatAmount: z.number().optional(),
      roundingAmount: z.number().optional(),
      remainder: z.number().optional(),
      remainderInBaseCurrency: z.number().optional(),
      dueDate: z.string().optional(),
      paymentTerms: z
        .object({
          paymentTermsNumber: z.number().optional(),
          daysOfCredit: z.number().optional(),
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
          name: z.string()
        })
        .optional(),
      recipient: z
        .object({
          name: z.string().optional(),
          address: z.string().optional(),
          zip: z.string().optional(),
          city: z.string().optional(),
          country: z.string().optional(),
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
              self: z.string().url()
            })
            .optional(),
          cvr: z.string().optional()
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
      pdf: z
        .object({
          download: z.string().url()
        })
        .optional(),
      layout: z
        .object({
          layoutNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      project: z
        .object({
          projectNumber: z.number().optional(),
          self: z.string().url()
        })
        .optional(),
      sent: z.string().optional(),
      self: z.string().url()
    })
  )
});

/**
 * https://restapi.e-conomic.com/schema/invoices.booked.bookedInvoiceNumber.get.schema.json
 */
const zGetBookedInvoiceResponseBody = z.object({
  bookedInvoiceNumber: z.number(), // this is optional in the JSON schema, but we assume it's always present
  date: z.string().optional(),
  currency: z.string().optional(),
  exchangeRate: z.number().optional(),
  netAmount: z.number().optional(),
  netAmountInBaseCurrency: z.number().optional(),
  grossAmount: z.number().optional(),
  grossAmountInBaseCurrency: z.number().optional(),
  vatAmount: z.number().optional(),
  roundingAmount: z.number().optional(),
  remainder: z.number().optional(),
  remainderInBaseCurrency: z.number().optional(),
  dueDate: z.string().optional(),
  paymentTerms: z
    .object({
      paymentTermsNumber: z.number().optional(),
      daysOfCredit: z.number().optional(),
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
      name: z.string()
    })
    .optional(),
  recipient: z
    .object({
      name: z.string().optional(),
      address: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
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
          self: z.string().url()
        })
        .optional(),
      cvr: z.string().optional()
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
  pdf: z
    .object({
      download: z.string().url()
    })
    .optional(),
  layout: z
    .object({
      layoutNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  project: z
    .object({
      projectNumber: z.number().optional(),
      self: z.string().url()
    })
    .optional(),
  sent: z.string().optional(),
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
    .optional(),
  self: z.string().url()
});

/**
 * https://restdocs.e-conomic.com/#post-invoices-booked
 */
export const zPostBookedInvoiceRequestBody = z.object({
  draftInvoice: z.object({
    draftInvoiceNumber: z.number()
  }),
  bookWithNumber: z.number().optional(),
  sendBy: z.enum(['none', 'ean']).optional()
});

export const zPostBookedInvoiceResponseBody = z.object({
  bookWithNumber: z.number(),
  draftInvoice: z.object({
    draftInvoiceNumber: z.number(),
    self: z.string().url()
  }),
  sentBy: z.enum(['none', 'ean'])
});

export type GetBookedInvoicesResponseBody = z.infer<typeof zGetBookedInvoicesResponseBody>;
export type GetBookedInvoiceResponseBody = z.infer<typeof zGetBookedInvoiceResponseBody>;
export type PostBookedInvoiceRequestBody = z.infer<typeof zPostBookedInvoiceRequestBody>;
export type PostBookedInvoiceResponseBody = z.infer<typeof zPostBookedInvoiceResponseBody>;
