import  {  Dispatch, SetStateAction } from "react";



export interface InfosProps {
  address: string;
  brand_name: string;
  city_name: string;
  country_name: string;
  email: string;
  id: string;
  is_complete_information: boolean;
  is_businessOwner:boolean;
  is_verified:boolean;
  last_name: string;
  name:string;
  password?:string;
  phone_number:string;
  registration_date:string;
  state_name:string;
  username:string;
  postal_code:string;
  work_phone:string;
  profile_image_path:string;
  work_place_image_path: string,
  logo_image_path: string,
  discounts_eyeRoll:{}[]
  

 
}

export interface AuthContextProps {
  [index: string]: string | object | null | boolean | undefined;
  isVerified: boolean;
  isLoggedIn: boolean;
  token: string | null;
  infos: InfosProps | undefined;
  login: (infos: object, token: string) => void;
  logout: () => void;
  setInfos: (infos: InfosProps | undefined) => void;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  isVerifyedHandler: (infos: object, token: string) => void;
}
