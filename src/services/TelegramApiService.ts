/**
 *
 * @param chatId
 * @param count
 * @param bot
 * @returns
 * ! 机器人逻辑函数接口api  示例代码
 */

import { ExtractedItem } from "../models/TelegramTypes";

const Emoji = ["🎲", "🎯", "🏀", "⚽", "🎳", "🎰"];

export async function sendDarts(
  chatId: any,
  count: number,
  bot: { sendDice: (arg0: any, arg1: { emoji: string }) => any }
) {
  const dartMessages = [];
  for (let i = 0; i < count; i++) {
    const dartMessage = await bot.sendDice(chatId, { emoji: Emoji[0] }); // 使用实际的 emoji，这里示例使用 '🎲'
    dartMessages.push(dartMessage);
  }
  return dartMessages;
}

export async function bettingTemplate(
  extractedData: ExtractedItem[]
): Promise<string> {
  // 模拟一些时间信息
  const sealTime = new Date("2024-01-28T10:00:50").toLocaleString();
  const drawTime = new Date("2024-01-28T10:01:00").toLocaleString();

  let replyTemplate = `第202400000001期
封盘时间：${sealTime}
开奖时间：${drawTime}
【特朗普-88888888】
下注内容：\n`;

  for (const item of extractedData) {
    let oddsText = "";

    switch (item.keyword) {
      case "大":
      case "小":
      case "单":
      case "双":
      case "对子":
      case "龙":
      case "虎":
        oddsText = "(1.99赔率)";
        break;
      case "大单":
      case "小双":
        oddsText = "(3.46赔率)";
        break;
      case "大双":
      case "小单":
        oddsText = "(4.46赔率)";
        break;
      case "豹子":
        oddsText = "(32赔率)";
        break;
      case "顺子":
        oddsText = "(6赔率)";
        break;
      case "合":
        oddsText = "(5赔率)";
        break;
      default:
        oddsText = "";
    }

    replyTemplate += `${item.keyword}-${item.number}${oddsText}\n`;
  }

  // 模拟余额
  const balance = 3710.81;
  replyTemplate += `\n余额：${balance.toFixed(2)}`;

  return replyTemplate;
}
