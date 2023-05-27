import axios from "axios";

export const signupService = async (firstname, lastname, email, password) =>
  await axios.post("/api/auth/signup", { firstname, lastname, email, password });
