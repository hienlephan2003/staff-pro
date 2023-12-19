import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import NewDepartmentForm from "@/components/departments/NewDepartmentForm";

const Departments = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10">
      <Dialog>
        <DialogTrigger onBlur={() => console.log("blur")}>
          <Button variant="outline">Thêm phòng ban</Button>
        </DialogTrigger>
        <DialogOverlay className="fixed inset-0 flex backdrop-blur-sm items-center justify-center bg-black/5 z-10  ">
          <DialogContent
            onInteractOutside={(e) => {
              e.preventDefault();
              console.log("outside");
            }}
            className="rounded-xl bg-white px-5 py-5 w-[900px] h-[500px] shadow-lg"
          >
            <DialogHeader className="flex justify-between mb-3">
              <DialogClose className="flex justify-end">
                <FontAwesomeIcon icon={faClose} />
              </DialogClose>
              <DialogTitle className="font-semibold text-lg items-center">
                Thêm phòng ban
              </DialogTitle>
              <DialogDescription>
                Nhập thông tin thêm mới phòng ban!
              </DialogDescription>
            </DialogHeader>
            <NewDepartmentForm />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
      <div
        onClick={() => {
          navigate("departmentDetail");
        }}
        className="flex flex-col justify-start gap-7 w-[200px] h-[300px]  shadow-md hover:shadow-lg p-4"
      >
        <img
          className="w-32 h-32 mx-auto object-cover"
          src="./assets/avatar1.png"
        />
        <div className="flex flex-col gap-2">
          <p className="base-semibold">Human Resources</p>
          <p className="small-regular">3 employees</p>
          <p className="small-medium">Manager: Phan Hien</p>
        </div>
      </div>
    </div>
  );
};

export default Departments;
