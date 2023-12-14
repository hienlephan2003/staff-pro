import React, { useState } from "react";
import {
  Inject,
  ScheduleComponent,
  TimelineMonth,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import { Resize } from "@syncfusion/ej2-react-grids";
const MyAttendance = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));
  const workDays: number[] = [0, 1, 2, 3, 4, 5];
  return (
    <div className="w-full min-h-screen">
      <ScheduleComponent
        height="200px"
        selectedDate={selectedDate}
        workDays={workDays}
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="TimelineWeek" />
          <ViewDirective option="TimelineMonth" />
        </ViewsDirective>
        <Inject services={[TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    </div>
  );
};

export default MyAttendance;
