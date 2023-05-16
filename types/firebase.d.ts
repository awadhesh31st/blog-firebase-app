export interface FirebaseCollection {
  dataBase: "users" | "articles";
}

export interface FirebaseContextProps {
  users?: User[];
  articles?: Article[];
  loading?: boolean;
  handleAuth?: () => void;
  currentUser?: UserInformation;
}

export interface User {
  id: string;
  data: UserInformation;
}

export interface Article {
  id: string;
  data: ArticleInformation;
}

export interface UserInformation {
  id?: string;
  updatedAt?: DateTime;
  bio?: string;
  lastname?: string;
  createdAt?: DateTime;
  email?: string;
  password?: string;
  profile_image?: string;
  username?: string;
  firstName?: string;
}

export interface ArticleInformation {
  title?: string;
  author?: string;
  publicationDate?: DateTime;
  articles_image?: string;
  tags?: string[];
  content?: string;
}

export interface DateTime {
  seconds?: number;
  nanoseconds?: number;
}

export interface GoogleLoginUserResponse {
  providerId?: string;
  uid?: string;
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
}
