"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SalaryConfigValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
type EmployeeInfoProps = {
  action?: string;
};
const SalaryConfigForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof SalaryConfigValidation>>({
    resolver: zodResolver(SalaryConfigValidation),
  });
  async function onSubmit(values: z.infer<typeof SalaryConfigValidation>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="basicSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Mức lương cơ bản
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Vd: 1000000đ"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxSociaInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Mức lương tối đa đóng bảo hiểm thất nghiệp
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Vd: 1000000đ"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxUnemploymentInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Mức lương tối đa đóng bảo hiểm thất nghiệp
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Vd: 1000000đ"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overtimeRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Tỉ lệ lương làm thêm
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Vd: 120%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sundayOvertimeRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Tỉ lệ lương làm thêm thứ bảy, chủ nhật
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Vd: 120%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="socialInsuranceCompanyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tỉ lệ bảo hiểm xã hội công ty đóng
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 10%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialInsuranceEmployeeRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tỉ lệ bảo hiểm xã hội nhân viên đóng
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 10%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unemploymentInsuranceCompanyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tỉ lệ bảo hiểm xã hội công ty đóng
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 10%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unemploymentInsuranceEmploymentRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tỉ lệ bảo hiểm xã hội nhân viên đóng
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 10%"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="incomeMinusPersonal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Giảm trừ bản thân
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 1000000đ"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="incomeMinusDepentdenciesPeople"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Giảm trừ người phụ thuộc
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vd: 1000000đ"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-5 mt-5 items-center justify-end">
          <Button
            type="submit"
            className="shad-button_primary bg-primary-2 hover:bg-primary-3 whitespace-nowrap"
          >
            {/* {isLoadingCreate || (isLoadingUpdate && "Loading...")} */}
            Lưu dữ liệu
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SalaryConfigForm;
