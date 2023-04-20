import { z } from 'zod';

/**
 * https://restapi.e-conomic.com/schema/invoices.drafts.get.schema.json
 */
export const zGetDraftInvoicesResponseBody = z
  .object({
    collection: z.array(
      z.object({
        //required values
        draftInvoiceNumber: z.number(),
        soap: z
          .object({
            currentInvoiceHandle: z
              .object({
                id: z.number().optional()
              })
              .optional()
          })
          .optional(),
        templates: z.object({
          bookingInstructions: z.string().url(),
          self: z.string().url()
        }),
        date: z.string(),
        currency: z.string(),
        exchangeRate: z.number(),
        netAmount: z.number(),
        netAmountInBaseCurrency: z.number(),
        grossAmount: z.number(),
        grossAmountInBaseCurrency: z.number(),
        marginInBaseCurrency: z.number(),
        marginPercentage: z.number(),
        vatAmount: z.number(),
        roundingAmount: z.number(),
        costPriceInBaseCurrency: z.number(),
        dueDate: z.string(),
        paymentTerms: z.object({
          paymentTermsNumber: z.number(),
          daysOfCredit: z.number().optional(),
          description: z.string().optional(),
          name: z.string().optional(),
          paymentTermsType: z.string().optional(),
          self: z.string().url()
        }),
        customer: z.object({
          customerNumber: z.number(),
          self: z.string().url()
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
        layout: z.object({
          layoutNumber: z.number(),
          self: z.string().url()
        }),
        pdf: z.object({
          download: z.string().url()
        }),
        lastUpdated: z.string(),
        self: z.string().url(),
        //optional values
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
            other: z.string().optional(),
            salesPerson: z
              .object({
                salesPersonNumber: z.number(),
                self: z.string().url()
              })
              .optional(),
            customerContact: z
              .object({
                customerContactNumber: z.number(),
                self: z.string().url()
              })
              .optional(),
            vendorReference: z
              .object({
                employeeNumber: z.number(),
                self: z.string().url()
              })
              .optional()
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
      developerHint: z.string().optional(),
      firstPage: z.string().url().optional(),
      lastPage: z.string().url().optional(),
      nextPage: z.string().url().optional()
    }),
    self: z.string().url()
  })
  .passthrough();

/**
 * https://restapi.e-conomic.com/schema/invoices.drafts.draftInvoiceNumber.get.schema.json
 */
export const zGetDraftInvoiceResponseBody = z
  .object({
    //required values
    draftInvoiceNumber: z.number(),
    soap: z
      .object({
        currentInvoiceHandle: z
          .object({
            id: z.number().optional()
          })
          .optional()
      })
      .optional(),
    templates: z.object({
      bookingInstructions: z.string().url(),
      self: z.string().url()
    }),
    date: z.string(),
    currency: z.string(),
    exchangeRate: z.number(),
    netAmount: z.number(),
    netAmountInBaseCurrency: z.number(),
    grossAmount: z.number(),
    grossAmountInBaseCurrency: z.number(),
    marginInBaseCurrency: z.number(),
    marginPercentage: z.number(),
    vatAmount: z.number(),
    roundingAmount: z.number(),
    costPriceInBaseCurrency: z.number(),
    dueDate: z.string(),
    paymentTerms: z.object({
      paymentTermsNumber: z.number(),
      daysOfCredit: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      paymentTermsType: z.string().optional(),
      self: z.string().url()
    }),
    customer: z.object({
      customerNumber: z.number(),
      self: z.string().url()
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
    layout: z.object({
      layoutNumber: z.number(),
      self: z.string().url()
    }),
    pdf: z.object({
      download: z.string().url()
    }),
    lastUpdated: z.string(),
    self: z.string().url(),
    //optional values
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
        other: z.string().optional(),
        salesPerson: z
          .object({
            salesPersonNumber: z.number(),
            self: z.string().url()
          })
          .optional(),
        customerContact: z
          .object({
            customerContactNumber: z.number(),
            self: z.string().url()
          })
          .optional(),
        vendorReference: z
          .object({
            employeeNumber: z.number(),
            self: z.string().url()
          })
          .optional()
      })
      .optional(),
    lines: z
      .array(
        z.object({
          lineNumber: z.number(),
          description: z.string().optional(),
          accrual: z
            .object({
              endDate: z.string().optional(),
              startDate: z.string().optional()
            })
            .optional(),
          departmentalDistribution: z
            .object({
              departmentalDistributionNumber: z.number().optional(),
              distributionType: z.string().optional()
            })
            .optional(),
          discountPercentage: z.number().optional(),
          product: z
            .object({
              productNumber: z.string()
            })
            .optional(),
          quantity: z.number().optional(),
          sortKey: z.number().optional(),
          unit: z
            .object({
              name: z.string().optional(),
              unitNumber: z.number().optional()
            })
            .optional(),
          unitCostPrice: z.number().optional(),
          unitNetPrice: z.number().optional()
        })
      )
      .optional()
  })
  .passthrough();

/**
 * https://restapi.e-conomic.com/schema/invoices.drafts.post.schema.json
 */
export const zPostDraftInvoiceRequestBody = z
  .object({
    //required values
    currency: z.string(),
    date: z.string(),
    paymentTerms: z.object({
      paymentTermsNumber: z.number()
    }),
    customer: z.object({
      customerNumber: z.number()
    }),
    recipient: z.object({
      name: z.string(),
      vatZone: z.object({
        vatZoneNumber: z.number()
      }),
      address: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      ean: z.string().optional(),
      mobilePhone: z.string().optional(),
      cvr: z.string().optional()
    }),
    layout: z.object({
      layoutNumber: z.number()
    }),
    //optional values
    delivery: z
      .object({
        address: z.string().optional(),
        city: z.string().optional(),
        country: z.string().optional(),
        deliveryDate: z.string().optional(),
        deliveryTerms: z.string().optional(),
        zip: z.string().optional()
      })
      .optional(),
    deliveryLocation: z
      .object({
        deliveryLocationNumber: z.number().optional()
      })
      .optional(),
    dueDate: z.string().optional(),
    notes: z
      .object({
        heading: z.string().optional(),
        textLine1: z.string().optional(),
        textLine2: z.string().optional()
      })
      .optional(),
    project: z
      .object({
        projectNumber: z.number().optional()
      })
      .optional(),
    references: z
      .object({
        customerContact: z
          .object({
            customerContactNumber: z.number().optional()
          })
          .optional(),
        other: z.string().optional(),
        salesPerson: z
          .object({
            employeeNumber: z.number().optional()
          })
          .optional(),
        vendorReference: z
          .object({
            employeeNumber: z.number().optional()
          })
          .optional()
      })
      .optional(),
    lines: z
      .array(
        z.object({
          lineNumber: z.number(),
          description: z.string().optional(),
          accrual: z
            .object({
              endDate: z.string().optional(),
              startDate: z.string().optional()
            })
            .optional(),
          departmentalDistribution: z
            .object({
              departmentalDistributionNumber: z.number().optional(),
              distributionType: z.string().optional()
            })
            .optional(),
          discountPercentage: z.number().optional(),
          product: z
            .object({
              productNumber: z.string()
            })
            .optional(),
          quantity: z.number().optional(),
          sortKey: z.number().optional(),
          unit: z
            .object({
              name: z.string().optional(),
              unitNumber: z.number().optional()
            })
            .optional(),
          unitCostPrice: z.number().optional(),
          unitNetPrice: z.number().optional()
        })
      )
      .optional()
  })
  .passthrough();

export type GetDraftInvoicesResponseBody = z.infer<typeof zGetDraftInvoicesResponseBody>;
export type GetDraftInvoiceResponseBody = z.infer<typeof zGetDraftInvoiceResponseBody>;
export type PostDraftInvoiceRequestBody = z.infer<typeof zPostDraftInvoiceRequestBody>;
export type PostDraftInvoiceResponseBody = GetDraftInvoiceResponseBody;
