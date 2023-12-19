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
import { constractFormValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
type EmployeeInfoProps = {
  action?: string;
};
const NewContractForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof constractFormValidation>>({
    resolver: zodResolver(constractFormValidation),
  });
  async function onSubmit(values: z.infer<typeof constractFormValidation>) {}
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
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Ngày bắt đầu</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Chọn một ngày</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
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
              name="expiredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Ngày kết thúc
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !expireDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expireDate ? (
                            format(expireDate, "PPP")
                          ) : (
                            <span>Chọn một ngày</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={expireDate}
                          onSelect={setExpireDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Phòng ban</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn phòng ban" />
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
              name="jobPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Vị trí công việc
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Vị trí công việc"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Vị trí công việc
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn vị trí công việc" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Manager</SelectItem>
                        <SelectItem value="dark">Human resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="constractFileUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Thêm file hợp đồng
                  </FormLabel>
                  <FormControl>
                    <FileUploader fieldChange={field.onChange} mediaUrl={""} />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-5 items-center justify-end">
          <Button
            type="submit"
            className="shad-button_primary bg-primary-2 hover:bg-primary-3 whitespace-nowrap"
          >
            Tiếp theo
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewContractForm;
