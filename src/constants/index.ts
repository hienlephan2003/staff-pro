import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { IHeader, ILeftSideBar } from "../types";

export const headerList: IHeader[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "My Info",
    route: "/my-info",
  },
  {
    title: "Employees",
    route: "/employees",
  },
  {
    title: "Departments",
    route: "/departments",
  },
  {
    title: "Salary",
    route: "/salary",
  },
  {
    title: "Report",
    route: "/report",
  },
  {
    title: "Settings",
    route: "/settings",
  },
];
export const myInfoLeftSideBar: ILeftSideBar[] = [
  {
    title: "Personal",
    route: "",
    icon: faHouse,
  },
  {
    title: "Job",
    route: "",
  },
  {
    title: "Time Off",
    route: "",
  },
];
