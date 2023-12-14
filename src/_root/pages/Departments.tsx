import React from "react";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10">
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
