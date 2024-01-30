/**
 * ! 命令控制器   示例代码
 * @param msg
 */
import { TelegramBotHandler } from "./TelegramBot";
import { ExtractedItem } from "../models/TelegramTypes";

const keywords: string[] = [
  "大",
  "小",
  "单",
  "双",
  "大单",
  "小单",
  "大双",
  "小双",
  "豹子",
  "对子",
  "顺子",
  "龙",
  "虎",
  "合",
];

const keyboard = {
  inline_keyboard: [[{ text: "机器人定制开发联系", url: "" }]],
};

export async function commandControl(msg: any, bot: any): Promise<void> {
  const botHandler = new TelegramBotHandler(bot);
  const chatId: number = msg.chat.id;
  const messageText: string = msg.text;
  const userId: number = msg.from.id;
  const firstName: string = msg.from.first_name;
  const originalMessageId = msg.message_id;
  const extractedData: ExtractedItem[] = [];

  for (const keyword of keywords) {
    const regex = new RegExp(`${keyword}(\\d+)`, "g");

    let match;
    while ((match = regex.exec(messageText)) !== null) {
      const number: number = parseInt(match[1], 10);
      const extractedItem: ExtractedItem = {
        keyword,
        number,
      };
      extractedData.push(extractedItem);
    }
  }

  // 在这里可以使用提取出来的数组进行处理
  const message = await botHandler.replyBettingMessage(extractedData);
  await bot.sendMessage(chatId, message, {
    reply_to_message_id: originalMessageId,
  });
  // 在异步函数中，你可能会执行一些异步操作，例如发送消息给 Telegram Bot 用户
  // 在这里添加你的异步逻辑
  botHandler.handleMessages(chatId);
}
