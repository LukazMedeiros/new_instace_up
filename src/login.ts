import axios from "axios";

export async function login() {
  const payload = {
    user_name: process.env.USER!,
    user_password: process.env.PASSWORD!,
    language_select: "en",
  };

  try {
    await axios.post(process.env.URL!, payload);
  } catch (error) {
    console.log(error);
  }
}
