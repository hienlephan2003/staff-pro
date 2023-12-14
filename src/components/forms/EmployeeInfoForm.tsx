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
import { EmployeeInfoValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
type EmployeeInfoProps = {
  action?: string;
};
const EmployeeInfoForm = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof EmployeeInfoValidation>>({
    resolver: zodResolver(EmployeeInfoValidation),
    // defaultValues: {
    //   caption: post ? post?.caption : "",
    //   file: [],
    //   location: post ? post?.location : "",
    //   tags: post ? post.tags.join(",") : "",
    // },
  });
  async function onSubmit(values: z.infer<typeof EmployeeInfoValidation>) {
    // if (post && action == "Update") {
    //   const updatedPost = await updatePost({
    //     ...values,
    //     postId: post.$id,
    //     imageId: post?.imageId,
    //     imageUrl: post?.imageUrl,
    //   });
    //   if (!updatedPost) {
    //     toast({ title: "Please try again" });
    //   }
    //   return navigate(`/posts/${post.$id}`);
    // } else {
    //   const newPost = await createPost({
    //     ...values,
    //     userId: user.id,
    //   });
    //   if (!newPost) {
    //     return toast({
    //       title: "Please try again",
    //     });
    //   }
    //   navigate("/");
    // }
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
                  <FormLabel className=" small-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Full Name"
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
                  <FormLabel className=" small-medium ">Job Position</FormLabel>
                  <FormControl>
                    <Select>
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
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Photo</FormLabel>
                  <FormControl>
                    <FileUploader fieldChange={field.onChange} mediaUrl={""} />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-9 w-full">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Full Name"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Department</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Select department" />
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
              name="manager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">Manager</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                        <SelectValue placeholder="Select manager" />
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
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" small-medium ">
                    Add Tags(separated by comma ",")
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Art, Expression, Learn"
                      className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    />
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
            {/* {isLoadingCreate || (isLoadingUpdate && "Loading...")} */}
            {action} Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeInfoForm;
