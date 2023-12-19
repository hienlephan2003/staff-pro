import React, { useState } from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData } from "../../lib/dummy";
import { employeesGrid, ordersData, ordersGrid } from "@/lib/header";
import Header from "@/components/shared/Header";
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
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import NewEmployeeLayout from "@/components/employees/NewEmployeeLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import NewEmployeeProvider from "@/context/NewEmployeeContext";

const Employees = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="w-full h-min-screen">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger onBlur={() => console.log("blur")}>
          <Button variant="outline">Thêm nhân viên</Button>
        </DialogTrigger>
        <DialogOverlay className="fixed inset-0 flex backdrop-blur-sm items-center justify-center bg-black/5 z-10  ">
          <DialogContent
            onInteractOutside={(e) => {
              e.preventDefault();
              console.log("outside");
            }}
            className="rounded-xl bg-white px-5 py-5 w-[900px] h-[500px] overflow-y-scroll shadow-lg"
          >
            <DialogHeader className="flex justify-between mb-3">
              <DialogClose className="flex justify-end">
                <FontAwesomeIcon icon={faClose} />
              </DialogClose>
              <DialogTitle className="font-semibold text-lg items-center">
                Thêm nhân viên
              </DialogTitle>
              <DialogDescription>
                Hoàn thành thông tin của nhân viên và thêm mới!
              </DialogDescription>
            </DialogHeader>
            <NewEmployeeProvider>
              <NewEmployeeLayout />
            </NewEmployeeProvider>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
      <GridComponent
        className="mt-5"
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>{" "}
    </div>
  );
};

export default Employees;
