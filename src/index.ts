import axios from "axios";
import { scheduleJob } from "node-schedule";

scheduleJob("*/30 * * * * *", async () => {
  const payload = {
    user_name: process.env.USER!,
    user_password: process.env.PASSWORD!,
    language_select: "en",
  };

  try {
    await axios.post(process.env.URL!, payload);

    console.log(
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_paulo" })
    );
  } catch (error) {
    console.error(error);
  }
});
