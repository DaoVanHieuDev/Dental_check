import axios from "axios";

export  default async function login(username, password) {
  try {
    const response = await axios.post(`http://localhost:3000/users`, { username, password });
    const { isAdmin } = response.data;
    console.log(isAdmin);
    return isAdmin;
  } catch (error) {
    console.error(error);
    return false;
  }
}
