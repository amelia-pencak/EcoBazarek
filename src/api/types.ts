export interface UserProfile {
  city: string;
  country: string;
  county: string;
  district: string;
  email: string;
  farmDesc: string;
  farmName: string;
  firstName: string;
  flatNumber: string;
  id: string;
  lastName: string;
  phone: string;
  postCode: string;
  street: string;
  streetNumber: string;
  voivodeship: string;
}

export interface MessageForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export interface LoginUserResponse {
  token: string;
  user: UserProfile;
}

export interface CreateUserProfile extends Omit<UserProfile, "id"> {
  password: string;
  repeatPassword?: string;
}