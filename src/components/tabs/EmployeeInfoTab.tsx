import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeResume from "./tabContents/EmployeeResume";
import EmployeeWork from "./tabContents/EmployeeWork";
import EmployeeHRSetting from "./tabContents/EmployeeHRSetting";

const EmployeeInfoTab = () => {
  return (
    <Tabs defaultValue="resume" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger className="overflow-clip " value="resume">
          Resume
        </TabsTrigger>
        <TabsTrigger className="overflow-clip" value="workinfo">
          Work Information
        </TabsTrigger>
        {/* <TabsTrigger className="overflow-clip" value="privateinfo">
          Private Information
        </TabsTrigger> */}
        <TabsTrigger className="overflow-clip" value="hrsettings">
          HR Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="resume">
        <EmployeeResume />
      </TabsContent>
      <TabsContent value="workinfo">
        <EmployeeWork />
      </TabsContent>
      <TabsContent value="hrsettings">
        <EmployeeHRSetting />
      </TabsContent>
    </Tabs>
  );
};
export default EmployeeInfoTab;
