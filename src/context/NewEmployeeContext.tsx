import { INewEmployeeContextType } from "@/types";
import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
const InitalState = {
  employeeInfor: {},
  contract: {},
  employeeSetting: {},
  step: 0,
  setEmployeeInfor: () => {},
  setContract: () => {},
  setEmployeeSetting: () => {},
  setStep: () => {},
};
export const NewEmployeeContext =
  createContext<INewEmployeeContextType>(InitalState);
const NewEmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    console.log("change step" + step);
  }, [step]);
  const [employeeInfor, setEmployeeInfor] = useState({});
  const [contract, setContract] = useState({});
  const [employeeSetting, setEmployeeSetting] = useState({});
  const value = {
    employeeInfor,
    contract,
    employeeSetting,
    step,
    setEmployeeInfor,
    setContract,
    setEmployeeSetting,
    setStep,
  };
  return (
    <NewEmployeeContext.Provider value={value}>
      {children}
    </NewEmployeeContext.Provider>
  );
};

export default NewEmployeeProvider;

export const useNewEmployeeContext = () => useContext(NewEmployeeContext);
