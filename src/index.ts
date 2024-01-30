/**
 * ! 入口文件，启动 Telegram Bot  示例代码
 */

import TelegramBot from "node-telegram-bot-api";
import config from "../config/config";
import { commandControl } from "./bot/CommandController";

const bot = new TelegramBot(config.telegramBotToken, {
  webHook: true,
});

bot.on("message", async (msg: any) => {
  commandControl(msg, bot);
});
// 启动机器人
bot.startPolling();
