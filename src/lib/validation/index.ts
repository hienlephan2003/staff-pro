import { z } from "zod";

export const EmployeeInfoValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(1000),
  tags: z.string(),
});
