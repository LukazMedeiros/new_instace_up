import express from "express";
import { scheduleJob } from "node-schedule";
import { login } from "./login";

const SERVER = express();

SERVER.get("/", async (request, response) => {
  await login();
  console.log(
    "executado " +
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_paulo" })
  );

  return response.send(
    "executado " +
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_paulo" })
  );
});

scheduleJob("* */30 * * * *", async () => {
  await login();
  console.log(
    "executado " +
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_paulo" })
  );
  return;
});

SERVER.listen(process.env.PORT);
