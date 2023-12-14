import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
export type ResumeItemType = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
};
export type Resume = {
  resumeType: string;
  items: ResumeItemType[];
};
export type SkillType = {
  skillName: string;
  skills: String[];
  level: String[];
  defaultLevel: number;
};
export type SkillItemType = {
  skill: string;
  level: number;
  progressPercent: number;
};
export type Skill = {
  skillType: SkillType;
  items: SkillItemType[];
};
const EmployeeResume = () => {
  const skillList: Skill[] = [
    {
      skillType: {
        skillName: "Language",
        level: ["Basic", "Fluence", "Advanced"],
        skills: ["Listening", "Speaking", "Writing"],
        defaultLevel: 0,
      },
      items: [
        {
          skill: "Listening",
          level: 1,
          progressPercent: 50,
        },
        {
          skill: "Speaking",
          level: 0,
          progressPercent: 50,
        },
      ],
    },
    {
      skillType: {
        skillName: "Coding",
        level: ["Basic", "Fluence", "Advanced"],
        skills: ["Frontend", "Backend", "Database"],
        defaultLevel: 0,
      },
      items: [
        {
          skill: "Frontend",
          level: 0,
          progressPercent: 30,
        },
        {
          skill: "Database",
          level: 1,
          progressPercent: 90,
        },
      ],
    },
  ];
  const resumeList: Resume[] = [
    {
      resumeType: "Education",
      items: [
        {
          title: "Information Technology Degree",
          description: "Well-type",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          title: "Information Technology Degree",
          description: "Well-type",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          title: "Information Technology Degree",
          description: "Well-type",
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
    {
      resumeType: "Experience",
      items: [
        {
          title: "Frontend Developer",
          description: "Well-type",
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
  ];
  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[60%] mx-0 border-r-[1px]">
          <CardHeader>
            <CardTitle className="base-semibold">Resume</CardTitle>
            <hr></hr>
          </CardHeader>
          <CardContent className="space-y-0">
            <div className="flex flex-col gap-5">
              {resumeList.map((resume, ind) => (
                <div className="flex flex-col " key={ind}>
                  <div className="flex justify-between mb-1 items-center">
                    <p className="base-medium">{resume.resumeType}</p>
                    <Button className="small-medium uppercase bg-gray-100 hover:bg-gray-200 text-dark-2 h-7">
                      Add
                    </Button>
                  </div>
                  {resume.items.map((item, index) => {
                    const isOdd = index % 2 == 0;
                    return (
                      <div
                        key={index}
                        className={` flex justify-between  py-2 px-2 rounded-md items-center mb-1 hover:bg-gray-100 ${
                          isOdd && "bg-gray-50"
                        }`}
                      >
                        <div className="flex justify-start w-auto h-auto items-center ">
                          <FontAwesomeIcon
                            className="w-[6px] text-slate-600 mr-2"
                            icon={faCircle}
                          />
                          <div className="flex flex-col w-full">
                            <p className=" text-[10px] mb-2">
                              {item.startDate.toLocaleDateString()} -{" "}
                              {item.endDate.toLocaleDateString()}
                            </p>
                            <p className="small-medium text-dark-1">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="w-[11px] h-[11px] self-start mt-2 text-dark-2 cursor-pointer"
                          icon={faTrash}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="flex">
                <p></p>
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </div>
        <div className="md:w-[40%] mx-0">
          <CardHeader>
            <CardTitle className="base-semibold">Skills</CardTitle>
            <hr></hr>
          </CardHeader>
          <CardContent className="space-y-0">
            <div className="flex flex-col gap-5">
              {skillList.map((skillItem, ind) => (
                <div className="flex flex-col gap-2" key={ind}>
                  <div className="flex justify-between items-center">
                    <p className="base-medium">
                      {skillItem.skillType.skillName}
                    </p>
                    <Button className="small-medium uppercase hover:bg-gray-200 bg-gray-100 text-dark-2 h-7">
                      Add
                    </Button>
                  </div>
                  <TableBody className="overflow-hidden">
                    {skillItem.items.map((item, index) => (
                      <>
                        <hr></hr>
                        <TableRow
                          className="w-full flex items-center"
                          key={index}
                        >
                          <TableCell className="w-[30%] font-medium overflow-hidden">
                            {item.skill}
                          </TableCell>
                          <TableCell className="w-[30%] overflow-hidden">
                            {skillItem.skillType.level[item.level]}
                          </TableCell>
                          <TableCell>
                            <Progress
                              className="w-[100px] h-1"
                              value={item.progressPercent}
                            />
                          </TableCell>
                          <TableCell className="mr-0 text-right">
                            {" "}
                            <FontAwesomeIcon
                              className="w-[11px] h-[11px] text-dark-2 cursor-pointer"
                              icon={faTrash}
                            />
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                    <hr></hr>
                  </TableBody>
                </div>
              ))}
              <div className="flex">
                <p></p>
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeResume;
