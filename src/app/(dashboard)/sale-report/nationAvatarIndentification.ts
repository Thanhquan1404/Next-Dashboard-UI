const nationAvatarDictionary: Record<string, string> = {
  "+1": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/2880px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
  "+84": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
  "+86": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  "+81": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png",
  "+82": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png",
  "+49": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flag_of_Germany_%28RGB%29.svg/2560px-Flag_of_Germany_%28RGB%29.svg.png"

};

export const nationAvatar = (phone: string) => {
  // extract phone code
  const match = phone.match(/^\+\d+/);
  const code = match ? match[0] : "";

  return nationAvatarDictionary[code] || "https://upload.wikimedia.org/wikipedia/commons/9/9a/Blank_flag.png";
}