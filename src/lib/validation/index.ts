import { z } from "zod";

export const EmployeeInfoValidation = z.object({
  fullname: z.string(),
  jobPosition: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  department: z.string(),
  manager: z.string(),
  coach: z.string(),
  tags: z.string(),
  imageUrl: z.string(),
});
export const EmployeeWorkInfoValidation = z.object({
  workaddress: z.string(),
  worklocation: z.string(),
  timeoffApprover: z.string().email(),
  timesheetApprover: z.string(),
  attendanceApprover: z.string(),
  workinghours: z.string(),
  payrate: z.string(),
  bonusrate: z.string(),
});
export const SalaryConfigValidation = z.object({
  basicSalary: z.number(),
  maxSociaInsurance: z.number(),
  maxUnemploymentInsurance: z.number(),
  overtimeRate: z.number(),
  sundayOvertimeRate: z.number(),
  socialInsuranceCompanyRate: z.number(),
  socialInsuranceEmployeeRate: z.number(),
  unemploymentInsuranceCompanyRate: z.number(),
  unemploymentInsuranceEmploymentRate: z.number(),
  incomeMinusPersonal: z.number(),
  incomeMinusDepentdenciesPeople: z.number(),
});
