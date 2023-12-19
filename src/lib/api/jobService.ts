// import { ID } from "appwrite";
// import { appwriteConfig, databases } from "../appwrite/config";

type INewJob = {
  jobType: string;
  jobTitle: string;
  salary: number;
  numberOfDayWorking: string;
  overtimeRate: string;
  timeOff: number;
};
export async function createJobPosition(jobPosition: INewJob) {
  try {
    // const newJobPosition = await databases.createDocument(
    //   appwriteConfig.databaseId,
    //   appwriteConfig.departmentCollectionId,
    //   ID.unique(),
    //   {
    //     ...jobPosition,
    //   }
    // );
    // return newJobPosition;
  } catch (err) {
    console.log(err);
  }
}
