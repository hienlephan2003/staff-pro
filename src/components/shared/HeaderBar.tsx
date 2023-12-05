import React, { useState } from "react";
import { headerList } from "../../constants";
import { NavLink } from "react-router-dom";
const HeaderBar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex md:px-28">
        {headerList.map((item, index) => {
          const isSelected = index == active;
          return (
            <NavLink
              className="flex flex-col justify-center items-center group w-auto pt-6"
              key={index}
              to={item.route}
              onClick={() => {
                setActive(index);
              }}
            >
              <div
                className={`px-4 md:px-10 pb-4 flex-1 base-semibold text-dark-1  hover:text-primary-1 ${
                  isSelected && "text-primary-1"
                } `}
              >
                {item.title}
              </div>
              <span
                className={`bottom-0 w-full hover:bg-primary-1 ${
                  isSelected && "bg-primary-1 h-[4px]"
                }`}
              ></span>
            </NavLink>
          );
        })}
      </section>
      <hr className="bg-gray-1 h-[0.5px]"></hr>
    </div>
  );
};

export default HeaderBar;
