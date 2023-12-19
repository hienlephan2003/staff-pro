export type IDepartment = {
  name: string;
  manager: string;
};
export async function createDepartment(department: IDepartment) {
  try {
    // const newDepartment = await databases.createDocument(
    //   appwriteConfig.databaseId,
    //   appwriteConfig.departmentCollectionId,
    //   ID.unique(),
    //   {
    //     ...department,
    //   }
    // );
    // return newDepartment;
  } catch (err) {
    console.log(err);
  }
}
