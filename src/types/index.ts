import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};
export type IHeader = {
  title: string;
  route: string;
};
export type ILeftSideBar = {
  title: string;
  children?: IChild[];
  route?: string;
  action?: Function;
  icon?: IconDefinition;
};
export type IChild = {
  title: string;
  route: string;
  icon?: IconDefinition;
};

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
