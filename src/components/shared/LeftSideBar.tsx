import { useState } from "react";
import { myInfoLeftSideBar } from "../../constants";
import { IChild } from "@/types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = () => {
  const firstTitle =
    myInfoLeftSideBar[0].children != undefined
      ? myInfoLeftSideBar[0].children[0].title
      : myInfoLeftSideBar[0].title;
  const [selected, setSelected] = useState(firstTitle);
  return (
    <div className="flex h-full">
      <div className="left-0 mt-2  w-[200px] h-full flex flex-col gap-3">
        <div className="flex justify-center my-5 items-center gap-5">
          <img src="./assets/avatar1.png" className="w-[20px]" />
          <div className="flex flex-col">
            <p className="base-semibold text-dark-1">Phan Hiển</p>
            <p className="small-regular text-dark-2">Solfware Delveloper</p>
          </div>
        </div>
        {myInfoLeftSideBar.map((item, index) => {
          if (item.children == undefined) {
            const isSelected = item.title == selected;
            return (
              <NavLink
                onClick={() => setSelected(item.title)}
                className={`flex items-center gap-10 group hover:bg-blue-100 px-6 py-2 ml-3 hover:text-primary-1 rounded-md text-dark-2 base-semibold ${
                  isSelected && "bg-blue-100 text-primary-1"
                }`}
                key={index}
                to={item?.route || ""}
              >
                <div className="flex gap-3 items-center">
                  {item.icon != undefined ? (
                    <FontAwesomeIcon
                      className="h-[15px] w-[15px]"
                      icon={item.icon!}
                    />
                  ) : (
                    <div className="w-[15px]"></div>
                  )}
                  <div>{item.title}</div>
                </div>
              </NavLink>
            );
          } else {
            return (
              <div className="flex flex-col" key={index}>
                <div className="uppercase h-auto px-6 py-2 small-regular">
                  {item.title}
                </div>
                <hr className="w-auto ml-4 h-[1px] bg-gray-400 mb-2 "></hr>
                <div className="ml-3">
                  {(item.children as IChild[]).map((subItem: IChild) => {
                    const isSelected = subItem.title == selected;
                    return (
                      <NavLink
                        onClick={() => setSelected(subItem.title)}
                        className={`flex items-center gap-10 group hover:bg-blue-100 px-6 py-2 mb-2 hover:text-primary-1 rounded-md text-dark-2 base-semibold ${
                          isSelected && "bg-blue-100 text-primary-1"
                        }`}
                        to={subItem.route}
                      >
                        <div className="flex gap-10 items-center">
                          {subItem.icon != undefined ? (
                            <FontAwesomeIcon
                              className="h-[15px] w-[15px]"
                              icon={subItem.icon!}
                            />
                          ) : (
                            <div className="w-[15px]"></div>
                          )}
                          <div>{subItem.title}</div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
                <hr className="w-auto ml-4  h-[1px] bg-gray-400"></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="w-[2px] h-full ml-2 mt-1 bg-gray-1"></div>{" "}
    </div>
  );
};
export default LeftSideBar;
