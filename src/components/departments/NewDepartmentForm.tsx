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
import { newDepartmentValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCreateDepartment } from "@/lib/react-query/queriesAndMutation";
import { cn } from "@/lib/utils";
type EmployeeInfoProps = {
  action?: string;
};
const NewDepartmentForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const { mutateAsync: createDepartment, isLoading: isPending } =
    useCreateDepartment();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof newDepartmentValidation>>({
    resolver: zodResolver(newDepartmentValidation),
    defaultValues: {
      name: "",
      manager: "",
    },
  });
  async function onSubmit(values: z.infer<typeof newDepartmentValidation>) {
    createDepartment(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium">Tên phòng ban</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Tên phòng ban"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="manager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Người quản lý
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Chọn người quản lý" />
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
          </div>
        </div>
        <div className="flex gap-4 my-5 items-center justify-end">
          <Button
            disabled={isPending}
            type="submit"
            className={cn(
              `shad-button_primary bg-primary-2  hover:bg-primary-3 whitespace-nowrap`,
              isPending && "animate-spin"
            )}
          >
            Thêm mới phòng ban
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewDepartmentForm;
