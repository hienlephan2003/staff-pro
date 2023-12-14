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
} from "../../ui/select";
import FileUploader from "../../shared/FileUploader";
import { EmployeeWorkInfoValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type EmployeeInfoProps = {
  action?: string;
};
const EmployeeWork = ({ action = "Create" }: EmployeeInfoProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof EmployeeWorkInfoValidation>>({
    resolver: zodResolver(EmployeeWorkInfoValidation),
    // defaultValues: {
    //   caption: post ? post?.caption : "",
    //   file: [],
    //   location: post ? post?.location : "",
    //   tags: post ? post.tags.join(",") : "",
    // },
  });
  async function onSubmit(values: z.infer<typeof EmployeeWorkInfoValidation>) {
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
    <Card>
      {/* <CardHeader>
        <CardTitle className="base-semibold">Work Information</CardTitle>
        <hr></hr>
      </CardHeader> */}

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 w-full mt-4 max-w-[800px]">
              <CardTitle className="base-semibold">Location</CardTitle>
              <hr></hr>

              <FormField
                control={form.control}
                name="worklocation"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start  gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Working place
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select work location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Office</SelectItem>
                          <SelectItem value="dark">Home</SelectItem>
                          <SelectItem value="system">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />

              <CardTitle className="base-semibold">Approvers</CardTitle>
              <hr></hr>
              <FormField
                control={form.control}
                name="timeoffApprover"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Time Off
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select time off approver" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Phan Hien</SelectItem>
                          <SelectItem value="dark">Dang Thuong</SelectItem>
                          <SelectItem value="system">Minh Tri</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timesheetApprover"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Time Sheet
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select time sheet approver" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Phan Hien</SelectItem>
                          <SelectItem value="dark">Dang Thuong</SelectItem>
                          <SelectItem value="system">Minh Tri</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attendanceApprover"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Attendance
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select attendance approver" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Phan Hien</SelectItem>
                          <SelectItem value="dark">Dang Thuong</SelectItem>
                          <SelectItem value="system">Minh Tri</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <CardTitle className="base-semibold">Location</CardTitle>
              <hr></hr>
              <FormField
                control={form.control}
                name="workinghours"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Working hours
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select working hours" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">40 hours/week</SelectItem>
                          <SelectItem value="dark">50 hours/week</SelectItem>
                          <SelectItem value="system">60 hours/week</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payrate"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Pay rate
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select pay rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">400000 d/month</SelectItem>
                          <SelectItem value="dark">500000 d/month</SelectItem>
                          <SelectItem value="system">600000 d/month</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bonusrate"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-start gap-10">
                    <FormLabel className=" whitespace-nowrap w-[100px] overflow-hidden small-medium ">
                      Bonus rate
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 small-regular  border-gray-1 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 ">
                          <SelectValue placeholder="Select bonus rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">100000 d/hours</SelectItem>
                          <SelectItem value="dark">200000 d/hours</SelectItem>
                          <SelectItem value="system">300000 d/hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
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
      </CardContent>
    </Card>
  );
};

export default EmployeeWork;
