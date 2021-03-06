export type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type photosType = {
  small: string | null;
  large: string | null;
};
export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  fullName: string;
  contacts: contactsType;
  photos: photosType;
};
export type usersType = {
  name: string;
  id: number;
  photos: photosType;
  status: string | null;
  followed: boolean;
};
export type MessagePoType = {
  id: number;
  message: string;
  like: number;
};
