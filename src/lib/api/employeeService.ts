import { ID } from "appwrite";

export type INewEmployee = {
  jobType: string;
  jobTitle: string;
  salary: number;
  numberOfDayWorking: string;
  overtimeRate: string;
  timeOff: number;
};
export async function createJobPosition(newEmployee: INewEmployee) {
  try {
    // const newJobPosition = await databases.createDocument(
    //   appwriteConfig.databaseId,
    //   appwriteConfig.employeeCollectionId,
    //   ID.unique(),
    //   {
    //     ...newEmployee,
    //   }
    // );
    // return newJobPosition;
  } catch (err) {
    console.log(err);
  }
}
