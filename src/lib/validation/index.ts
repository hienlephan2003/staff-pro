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
  // payrate: z.string(),
  // bonusrate: z.string(),
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

export const constractFormValidation = z.object({
  startDate: z.date(),
  expiredDate: z.date(),
  type: z.string(),
  department: z.string(),
  jobPosition: z.string(),
  constractFileUrl: z.string(),
  basicSalary: z.number(),
  salary: z.string(),
  moneyItems: z.custom().array(),
  overtimeRate: z.number(),
  lateMinusPertime: z.number(),
});
export const settingFormValidation = z.object({
  userName: z.string().min(1, { message: "Trường này là bắt buộc" }),
  password: z.string().min(1, { message: "Trường này là bắt buộc" }),
  reportTo: z.string().min(1, { message: "Trường này là bắt buộc" }),
  approver: z.string().min(1, { message: "Trường này là bắt buộc" }),
});

export const employeeBasicInforForm = z.object({
  fullname: z.string().min(1, { message: "Trường này là bắt buộc" }),
  phoneNumber: z.string().min(1, { message: "Trường này là bắt buộc" }),
  email: z.string().email({ message: "Trường này là bắt buộc" }),
  imageUrl: z.custom<File[]>(),
  dateOfBirth: z.date(),
  province: z.string().min(1, { message: "Trường này là bắt buộc" }),
  district: z.string().min(1, { message: "Trường này là bắt buộc" }),
  ward: z.string().min(1, { message: "Trường này là bắt buộc" }),
  provinceCode: z.string().min(1, { message: "Trường này là bắt buộc" }),
  districtCode: z.string().min(1, { message: "Trường này là bắt buộc" }),
  wardCode: z.string().min(1, { message: "Trường này là bắt buộc" }),
  cardId: z.string().min(1, { message: "Trường này là bắt buộc" }),
  socialInsurance: z.string().min(1, { message: "Trường này là bắt buộc" }),
  socialInsuranceActiveDate: z.date(),
  dependencePersons: z.custom().array(),
  nationality: z.string().min(1, { message: "Trường này là bắt buộc" }),
  personalTaxCode: z.string().min(1, { message: "Trường này là bắt buộc" }),
});
export const newDepartmentValidation = z.object({
  name: z.string().min(1, { message: "Trường này là bắt buộc" }),
  manager: z.string().min(1, { message: "Trường này là bắt buộc" }),
});
export const jobPositonValidation = z.object({
  positionType: z.string().min(1, { message: "Trường này là bắt buộc" }),
  positionName: z.string().min(1, { message: "Trường này là bắt buộc" }),
  description: z.string(),
  minSalary: z.number().positive(),
  maxSalary: z.number().positive(),
});
export const jobPositionTypeValidation = z.object({
  jopPositionTypeName: z.string().min(1, { message: "Trường này là bắt buộc" }),
  description: z.string().min(1, { message: "Trường này là bắt buộc" }),
});
export const employeeTypeValidation = z.object({
  employeeTypeName: z.string().min(1, { message: "Trường này là bắt buộc" }),
  description: z.string().min(1, { message: "Trường này là bắt buộc" }),
});
