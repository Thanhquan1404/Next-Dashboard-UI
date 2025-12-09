//------------------- USER LOGIN API RESQUEST AND RESPONSE -------------------//
export interface loginRequestType {
  username: string,
  password: string,
}

export interface loginResponseType {
  code: number,
  message: string,
  error? : {
    code: string,
    message: string,
  }
  data?: {
    accessToken: string,
    refreshToken: string,
    fullName: string,
    avatarUrl: string,
  }
}