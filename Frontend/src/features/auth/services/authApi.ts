import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
