export const KEY_TOKEN = "accessToken";

// SET ACCESS TOKEN 
export const setToken = (token: string) => {
  localStorage.setItem(KEY_TOKEN, token);
};

// GET ACCESS TOKEN 
export const getToken = (): string | null => {
  const token = localStorage.getItem(KEY_TOKEN);

  return token || null;
}

// REMOVE ACCESS TOKEN 
export const removeToken = () => {
  return localStorage.removeItem(KEY_TOKEN);
}