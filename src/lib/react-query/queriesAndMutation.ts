import { useMutation } from "@tanstack/react-query";
import { IDepartment, createDepartment } from "../api/departmentService";
import { INewEmployee, createJobPosition } from "../api/employeeService";

export const useCreateJobPosition = () => {
  return useMutation({
    mutationFn: (jobPosition: INewEmployee) => createJobPosition(jobPosition),
  });
};
export const useCreateDepartment = () => {
  return useMutation({
    mutationFn: (jobPosition: IDepartment) => createDepartment(jobPosition),
    mutationKey: ["NEW_DEPARTMENT"],
  });
};
