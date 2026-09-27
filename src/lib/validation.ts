import { z } from "zod";

export const inquirySchema = z.object({
  vesselName: z.string().min(2, "Enter the vessel name"),
  imoNumber: z
    .string()
    .regex(/^\d{7}$/, "IMO number is 7 digits")
    .or(z.literal(""))
    .optional(),
  port: z.string().min(1, "Select a port"),
  eta: z.string().min(1, "Enter an expected arrival date"),
  contactName: z.string().min(2, "Enter your name"),
  contactEmail: z.string().email("Enter a valid email"),
  contactPhone: z.string().min(6, "Enter a phone number"),
  itemsNeeded: z.string().min(10, "Describe what you need, with quantities if known"),
  urgency: z.enum(["standard", "urgent", "critical"]),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;