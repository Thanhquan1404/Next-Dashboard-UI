//************************************************ USER PAGE ****************************************************/
// DECLARE USER SIGN UP INPUT DATA TYPE 
export interface UserSignUpType {
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  email: string;
  password: string;
}
// DECLARE USER SIGN IN INPUT DATA TYPE 
export interface userLoginType {
  username: string;
  password: string;
}

//--------------------GET LIST USER REQUEST AND RESPONSE TYPE --------------------
export interface GetListUserResponseType{
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatarUrl: string | null;
  createdAt: string;  
  updatedAt: string;  
}
