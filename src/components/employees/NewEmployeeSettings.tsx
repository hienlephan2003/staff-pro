"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FileUploader from "../shared/FileUploader";
import { settingFormValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import EmployeeHRSetting from "../tabs/tabContents/EmployeeHRSetting";
type EmployeeInfoProps = {
  action?: string;
};
const NewEmployeeSetting = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof settingFormValidation>>({
    resolver: zodResolver(settingFormValidation),
    defaultValues: {
      userName: "",
      password: "",
      reportTo: "",
      approver: "",
    },
  });
  async function onSubmit(values: z.infer<typeof settingFormValidation>) {}
  // startDate: z.date(),
  // expiredDate: z.date(),
  // type: z.string(),
  // department: z.string(),
  // jobPosition: z.string(),
  // salary: z.number(),
  // numberOfDayWorking: z.number(),
  // overtimeRate: z.number(),
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [expireDate, setExpireDate] = useState<Date | undefined>();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tên đăng nhập
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Tên đăng nhập"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Thêm mật khẩu
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder=""
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reportTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Người báo cáo trực tiếp
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn người báo cáo trực tiếp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">It</SelectItem>
                        <SelectItem value="dark">Human resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="approver"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Người duyệt yêu cầu
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Người duyệt yêu cầu"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-9 w-full"></div>
        </div>
        <div className="flex gap-4 mb-5 items-center justify-end">
          <Button
            type="submit"
            className="shad-button_primary bg-primary-2 hover:bg-primary-3 whitespace-nowrap"
          >
            Tạo nhân viên
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewEmployeeSetting;
