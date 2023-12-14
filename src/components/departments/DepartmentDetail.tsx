import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const DepartmentDetail = () => {
  return (
    <div className="w-full min-h-screen p-10">
      <Card>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[40%] mx-0 border-r-[1px]">
            <CardHeader>
              <CardTitle className="base-semibold">
                Chi tiết phòng ban
              </CardTitle>
              <hr></hr>
            </CardHeader>
            <CardContent className="space-y-0">
              <div className="flex flex-col gap-5">
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Tên phòng ban:{" "}
                  </span>{" "}
                  <span>Nhân sự</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Department Name:{" "}
                  </span>{" "}
                  <span>Human Resources</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Ngày thành lập:{" "}
                  </span>{" "}
                  <span>19/2/2021</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Số lượng nhân viên:{" "}
                  </span>{" "}
                  <span>10</span>
                </p>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </div>
          <div className="md:w-[40%] mx-0 border-r-[1px]">
            <CardHeader>
              <CardTitle className="base-semibold">
                Danh sách nhân viên
              </CardTitle>
              <hr></hr>
            </CardHeader>
            <CardContent className="space-y-0">
              <div className="flex flex-col gap-5">
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Tên phòng ban:{" "}
                  </span>{" "}
                  <span>Nhân sự</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Department Name:{" "}
                  </span>{" "}
                  <span>Human Resources</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Ngày thành lập:{" "}
                  </span>{" "}
                  <span>19/2/2021</span>
                </p>
                <p className="flex gap-10">
                  <span className="small-medium w-[120px]">
                    Số lượng nhân viên:{" "}
                  </span>{" "}
                  <span>10</span>
                </p>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DepartmentDetail;
