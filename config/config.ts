// config.ts

import dotenv from "dotenv";

dotenv.config();

export default {
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
  mongodbConnectionString: process.env.MONGODB_CONNECTION_STRING || "",
  // 添加其他配置项...
};
