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

//-------------------- EMPLOYEE SAMPLES --------------------
export interface UserType {
  UserID: string,
  username: string,
}

export const listUserSamples: UserType[] = [
  { UserID: "001", username: "Nguyen Thanh Quan" },
  { UserID: "002", username: "Tran Thi Mai Anh" },
  { UserID: "003", username: "Le Van Minh" },
  { UserID: "004", username: "Pham Hoang Nam" },
  { UserID: "005", username: "Hoang Thi Lan" },
  { UserID: "006", username: "Vu Minh Tuan" },
  { UserID: "007", username: "Dang Ngoc Linh" },
  { UserID: "008", username: "Bui Quang Huy" },
  { UserID: "009", username: "Do Thi Kim Oanh" },
  { UserID: "010", username: "Ngo Van Duc" },
];