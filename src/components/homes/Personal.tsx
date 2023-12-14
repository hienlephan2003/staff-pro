import React from "react";
import EmployeeInfoForm from "../forms/EmployeeInfoForm";
import EmployeeInfoTab from "../tabs/EmployeeInfoTab";

const Personal = () => {
  return (
    <div className="w-full h-full m-10 mb-[300px]">
      <p className="text-[25px] font-semibold mb-3">Personal Information</p>
      <EmployeeInfoForm />
      <EmployeeInfoTab />
    </div>
  );
};

export default Personal;
