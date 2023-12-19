import React, { useEffect, useState } from "react";
import NewEmployeeForm from "./NewEmplyeeForm";
import NewEmployeeSetting from "./NewEmployeeSettings";
import NewContractForm from "./NewConstractForm";
import NewEmployeeProvider, {
  useNewEmployeeContext,
} from "@/context/NewEmployeeContext";
const NewEmployeeLayout = () => {
  const { step } = useNewEmployeeContext();
  useEffect(() => {
    console.log("change step in e" + step);
  }, [step]);
  return (
    <div>
      {step == 0 && <NewEmployeeForm />}
      {step == 1 && <NewContractForm />}
      {step == 2 && <NewEmployeeSetting />}
    </div>
  );
};

export default NewEmployeeLayout;
