import axios from "axios";

export const authenticateUserApi = async(username = 'emilys', password = 'emilyspass') => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {username, password});
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}