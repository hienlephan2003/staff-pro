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
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { employeeBasicInforForm } from "@/lib/validation";
import { useNewEmployeeContext } from "@/context/NewEmployeeContext";
type EmployeeInfoProps = {
  action?: string;
};
const NewEmployeeForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { setStep } = useNewEmployeeContext();
  const form = useForm<z.infer<typeof employeeBasicInforForm>>({
    resolver: zodResolver(employeeBasicInforForm),
    defaultValues: {
      fullname: "",
      phoneNumber: "",
      dateOfBirth: new Date(),
      email: "",
      imageUrl: undefined,
      province: "",
      district: "",
      ward: "",
      provinceCode: "",
      districtCode: "",
      wardCode: "",
      cardId: "",
      socialInsurance: "",
      nationality: "",
      personalTaxCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof employeeBasicInforForm>) {
    console.log("submit");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">Họ và tên</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Họ và tên"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red">
                    {/* {JSON.stringify(form.formState.errors)} */}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Số điện thoại
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Số điện thoại"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Ngày sinh</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Quốc tịch</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn quốc tịch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Việt Nam</SelectItem>
                        <SelectItem value="dark">Trung Quốc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="employee@gmail.com"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Căn cước công dân
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Nhập căn cước công dân"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Mã bảo hiểm xã hội
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Nhập bảo hiểm xã hội"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalTaxCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Mã số thuế cá nhân
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Nhập mã số thuế cá nhân"
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
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Tỉnh, thành phố
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Seelct job position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Manager</SelectItem>
                        <SelectItem value="dark">Teacher</SelectItem>
                        <SelectItem value="system">Doctor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Quận, huyện</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn Quận, huyện" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Manager</SelectItem>
                        <SelectItem value="dark">Teacher</SelectItem>
                        <SelectItem value="system">Doctor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Phường, xã</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn Phường, xã" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Manager</SelectItem>
                        <SelectItem value="dark">Teacher</SelectItem>
                        <SelectItem value="system">Doctor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Photo</FormLabel>
                  <FormControl>
                    <FileUploader fieldChange={field.onChange} mediaUrl="" />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-5 items-center justify-end">
          <Button
            type="button"
            onClick={() => {
              console.log("step");
              setStep(1);
            }}
            className="shad-button_primary bg-primary-2 hover:bg-primary-3 whitespace-nowrap"
          >
            Tiếp theo
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewEmployeeForm;
