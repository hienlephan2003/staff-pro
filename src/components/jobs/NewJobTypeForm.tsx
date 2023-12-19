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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { jobPositionTypeValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type EmployeeInfoProps = {
  action?: string;
};
const NewJobPositionTypeForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const form = useForm<z.infer<typeof jobPositionTypeValidation>>({
    resolver: zodResolver(jobPositionTypeValidation),
    defaultValues: {
      jopPositionTypeName: "",
      description: "",
    },
  });
  async function onSubmit(values: z.infer<typeof jobPositionTypeValidation>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="jopPositionTypeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Tên loại vị trí
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Tên loại vị trí"
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">
                    Thông tin chi tiết
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Thông tin chi tiết"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red">
                    {/* {JSON.stringify(form.formState.errors)} */}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-9 w-full"></div>
        </div>
        <div className="flex gap-4 mb-5 items-center justify-end">
          <Button
            type="button"
            onClick={() => {}}
            className="shad-button_primary bg-primary-2 hover:bg-primary-3 whitespace-nowrap"
          ></Button>
        </div>
      </form>
    </Form>
  );
};

export default NewJobPositionTypeForm;
