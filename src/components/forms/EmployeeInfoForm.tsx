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
import { Textarea } from "../ui/textarea";
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-dark-3 border-none h-36 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Photo</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl={""} />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Add Location</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="h-12 bg-dark-3 border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
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
              <FormLabel className="text-white">
                Add Tags(separated by comma ",")
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Art, Expression, Learn"
                  className="h-12 bg-dark-3 border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <div className="flex gap-4 items-center justify-end">
          <Button
            onClick={() => navigate(-1)}
            type="button"
            className="shad-button_dark_4"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
          >
            {/* {isLoadingCreate || (isLoadingUpdate && "Loading...")} */}
            {action} Save changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeInfoForm;
